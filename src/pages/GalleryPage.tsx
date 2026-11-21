import { useSitePreferences } from '../context/SitePreferences';
import { breeds } from '../data/breeds';

export function GalleryPage() {
  const { t } = useSitePreferences();
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl text-forest mb-4">{t('gallery')}</h1>
      <p className="text-ink/70 mb-8">{t('galleryDescription')}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {breeds.map(breed => (
          <div key={breed.slug} className="aspect-square bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition">
             <img src={breed.images.hero} alt={breed.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}