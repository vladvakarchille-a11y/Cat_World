const fs = require('fs');
const path = require('path');

// Thumbnails Wikimedia Commons. See public/images/credits.txt for attribution.
const images = {
  'maine-coon': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Maine_Coon_male_NO_Sigdalskauen_Balder.jpg/960px-Maine_Coon_male_NO_Sigdalskauen_Balder.jpg',
  'siamois': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Siamese_cat%2C_female.jpg/960px-Siamese_cat%2C_female.jpg',
  'bengal': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Bengal_-_18.jpg/960px-Bengal_-_18.jpg',
  'ragdoll': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Gato_Ragdoll_BreedingCat.jpg/960px-Gato_Ragdoll_BreedingCat.jpg',
  'sphynx': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/1_adult_cat_Sphynx._img_047.jpg/960px-1_adult_cat_Sphynx._img_047.jpg',
  'british-shorthair': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Gray_British_Shorthair_with_closed_eyes_in_Dubai.jpg/960px-Gray_British_Shorthair_with_closed_eyes_in_Dubai.jpg',
  'persan': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Persian_Cat_from_Kerala_01.jpg/960px-Persian_Cat_from_Kerala_01.jpg',
  'sacre-de-birmanie': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/5_month_old_Chocolate_Point_Birman_kitten.jpg/960px-5_month_old_Chocolate_Point_Birman_kitten.jpg'
};

const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download(url, dest) {
  const response = await fetch(url, { headers: { 'User-Agent': 'CAT-WORLD image downloader' } });
  if (!response.ok) throw new Error(`Code HTTP ${response.status}`);
  if (!response.headers.get('content-type')?.startsWith('image/')) {
    throw new Error('La réponse reçue n’est pas une image.');
  }

  const image = Buffer.from(await response.arrayBuffer());
  if (image.length === 0) throw new Error('Le fichier téléchargé est vide.');
  fs.writeFileSync(dest, image);
  return image.length;
}

(async () => {
  console.log('Téléchargement de 8 images depuis Wikimedia Commons...');
  const failures = [];
  for (const [slug, url] of Object.entries(images)) {
    process.stdout.write(`[${slug}] ... `);
    try {
      const bytes = await download(url, path.join(dir, `${slug}.jpg`));
      console.log(`OK (${Math.round(bytes / 1024)} Ko)`);
    } catch (e) {
      fs.rmSync(path.join(dir, `${slug}.jpg`), { force: true });
      failures.push(slug);
      console.log(`ERREUR ${e.message}`);
    }
  }
  if (failures.length > 0) {
    throw new Error(`Échec du téléchargement pour : ${failures.join(', ')}`);
  }
  console.log('Téléchargement terminé.');
})();