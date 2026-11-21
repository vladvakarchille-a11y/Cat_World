
// ============================================================
// SCRIPT CAT WORLD - VERSION COMPLÈTE (Hero, Galerie, Quiz, etc.)
// ============================================================
const fs = require('fs');
const path = require('path');

const files = {
  // --- CONFIGURATION ET STYLES ---
  'src/index.css': `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

body { @apply bg-cream-soft text-ink font-sans antialiased; }
h1, h2, h3, h4 { @apply font-serif; }
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #F6F1E8; }
::-webkit-scrollbar-thumb { background: #C5A46D; border-radius: 4px; }`,

  // --- LES TYPES ET LES 30 RACES ---
  'src/data/breeds.ts': `import type { Breed } from './types';

export const breeds: Breed[] = [
  {
    slug: 'maine-coon', name: 'Maine Coon', origin: { country: 'États-Unis', flag: '🇺🇸' },
    history: { period: 'XIXe s.', summary: 'Race naturelle américaine, robuste et majestueuse.', recognisedBy: ['CFA', 'TICA'] },
    images: { hero: '/images/maine-coon.jpg', gallery: [] },
    physical: { size: 'grande', weightKg: [4.5, 11], lifespanYears: [12, 15], coatLength: 'long', coatPatterns: ['tabby'], eyeColors: ['vert'], headShape: 'carrée', bodyType: 'robuste' },
    personality: { temperament: ['doux', 'sociable', 'joueur'], affection: 5, sociability: 5, intelligence: 4, curiosity: 4, activity: 3, groomingNeed: 4, withChildren: 5, withPets: 5, apartmentFriendly: 3 },
    care: { brushing: '2x/semaine', diet: 'Protéines', mental: 'Jeux', exercise: 'Actif' },
    health: { predispositions: ['HCM'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['siamois', 'ragdoll'], popularity: 98
  },
  {
    slug: 'siamois', name: 'Siamois', origin: { country: 'Thaïlande', flag: '🇹🇭' },
    history: { period: 'XIVe s.', summary: 'Originaire du Siam, race très bavarde et affectueuse.', recognisedBy: ['CFA', 'TICA'] },
    images: { hero: '/images/siamois.jpg', gallery: [] },
    physical: { size: 'moyenne', weightKg: [3, 5], lifespanYears: [12, 20], coatLength: 'court', coatPatterns: ['point'], eyeColors: ['bleu'], headShape: 'triangulaire', bodyType: 'svelte' },
    personality: { temperament: ['bavard', 'affectueux', 'intelligent'], affection: 5, sociability: 5, intelligence: 5, curiosity: 5, activity: 4, groomingNeed: 1, withChildren: 4, withPets: 4, apartmentFriendly: 5 },
    care: { brushing: 'Rare', diet: 'Standard', mental: 'Interaction', exercise: 'Jeux' },
    health: { predispositions: ['Amyloïdose'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['maine-coon', 'bengal'], popularity: 90
  },
  {
    slug: 'bengal', name: 'Bengal', origin: { country: 'États-Unis', flag: '🇺🇸' },
    history: { period: '1960-1980', summary: 'Croisement entre chat léopard et chat domestique.', recognisedBy: ['TICA', 'CFA'] },
    images: { hero: '/images/bengal.jpg', gallery: [] },
    physical: { size: 'moyenne', weightKg: [3.5, 7], lifespanYears: [12, 16], coatLength: 'court', coatPatterns: ['rosettes'], eyeColors: ['vert'], headShape: 'ronde', bodyType: 'athlétique' },
    personality: { temperament: ['actif', 'curieux', 'joueur'], affection: 4, sociability: 4, intelligence: 5, curiosity: 5, activity: 5, groomingNeed: 1, withChildren: 4, withPets: 3, apartmentFriendly: 3 },
    care: { brushing: 'Hebdomadaire', diet: 'Protéines', mental: 'Puzzles', exercise: 'Intense' },
    health: { predispositions: ['HCM'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['siamois', 'abyssin'], popularity: 94
  },
  {
    slug: 'ragdoll', name: 'Ragdoll', origin: { country: 'États-Unis', flag: '🇺🇸' },
    history: { period: 'Années 1960', summary: 'Race docile et très affectueuse, aux yeux bleus.', recognisedBy: ['CFA', 'TICA'] },
    images: { hero: '/images/ragdoll.jpg', gallery: [] },
    physical: { size: 'grande', weightKg: [4.5, 9], lifespanYears: [12, 17], coatLength: 'mi-long', coatPatterns: ['point'], eyeColors: ['bleu'], headShape: 'large', bodyType: 'massif' },
    personality: { temperament: ['doux', 'calme', 'affectueux'], affection: 5, sociability: 5, intelligence: 4, curiosity: 3, activity: 2, groomingNeed: 4, withChildren: 5, withPets: 5, apartmentFriendly: 5 },
    care: { brushing: '2-3x/semaine', diet: 'Standard', mental: 'Jeux doux', exercise: 'Modéré' },
    health: { predispositions: ['HCM'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['maine-coon', 'siamois'], popularity: 96
  },
  {
    slug: 'sphynx', name: 'Sphynx', origin: { country: 'Canada', flag: '🇨🇦' },
    history: { period: 'Années 1960', summary: 'Chat sans poil, très affectueux et extraverti.', recognisedBy: ['TICA', 'CFA'] },
    images: { hero: '/images/sphynx.jpg', gallery: [] },
    physical: { size: 'moyenne', weightKg: [3, 5.5], lifespanYears: [12, 15], coatLength: 'sans', coatPatterns: ['peau'], eyeColors: ['bleu', 'vert'], headShape: 'triangulaire', bodyType: 'musclé' },
    personality: { temperament: ['affectueux', 'bavard', 'curieux'], affection: 5, sociability: 5, intelligence: 4, curiosity: 5, activity: 4, groomingNeed: 3, withChildren: 5, withPets: 4, apartmentFriendly: 5 },
    care: { brushing: 'Bain doux', diet: 'Calories élevées', mental: 'Interaction', exercise: 'Jeux' },
    health: { predispositions: ['HCM'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['siamois', 'bengal'], popularity: 82
  },
  {
    slug: 'british-shorthair', name: 'British Shorthair', origin: { country: 'Royaume-Uni', flag: '🇬🇧' },
    history: { period: 'XIXe s.', summary: 'Chat robuste et calme, au pelage dense.', recognisedBy: ['CFA', 'TICA'] },
    images: { hero: '/images/british-shorthair.jpg', gallery: [] },
    physical: { size: 'moyenne', weightKg: [4, 8], lifespanYears: [12, 17], coatLength: 'court', coatPatterns: ['bleu'], eyeColors: ['cuivre'], headShape: 'ronde', bodyType: 'cobby' },
    personality: { temperament: ['calme', 'indépendant', 'affectueux'], affection: 4, sociability: 4, intelligence: 4, curiosity: 3, activity: 2, groomingNeed: 2, withChildren: 5, withPets: 4, apartmentFriendly: 5 },
    care: { brushing: 'Hebdomadaire', diet: 'Standard', mental: 'Jeux calmes', exercise: 'Modéré' },
    health: { predispositions: ['HCM'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['maine-coon', 'ragdoll'], popularity: 93
  },
  {
    slug: 'persan', name: 'Persan', origin: { country: 'Iran', flag: '🇮🇷' },
    history: { period: 'XVIIe s.', summary: 'Chat à poil long, calme et emblématique.', recognisedBy: ['CFA', 'TICA'] },
    images: { hero: '/images/persan.jpg', gallery: [] },
    physical: { size: 'moyenne', weightKg: [3, 5.5], lifespanYears: [12, 17], coatLength: 'long', coatPatterns: ['uni'], eyeColors: ['cuivre'], headShape: 'ronde', bodyType: 'cobby' },
    personality: { temperament: ['calme', 'affectueux'], affection: 5, sociability: 4, intelligence: 3, curiosity: 2, activity: 2, groomingNeed: 5, withChildren: 4, withPets: 4, apartmentFriendly: 5 },
    care: { brushing: 'Quotidien', diet: 'Standard', mental: 'Jeux doux', exercise: 'Léger' },
    health: { predispositions: ['PKD'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['ragdoll', 'british-shorthair'], popularity: 92
  },
  {
    slug: 'sacre-de-birmanie', name: 'Sacré de Birmanie', origin: { country: 'France', flag: '🇫🇷' },
    history: { period: 'Années 1920', summary: 'Chat aux gants blancs et aux yeux bleus.', recognisedBy: ['CFA', 'TICA'] },
    images: { hero: '/images/birman.jpg', gallery: [] },
    physical: { size: 'moyenne', weightKg: [3.5, 6], lifespanYears: [12, 16], coatLength: 'mi-long', coatPatterns: ['point'], eyeColors: ['bleu'], headShape: 'arrondie', bodyType: 'robuste' },
    personality: { temperament: ['doux', 'sociable'], affection: 5, sociability: 5, intelligence: 4, curiosity: 3, activity: 3, groomingNeed: 3, withChildren: 5, withPets: 5, apartmentFriendly: 5 },
    care: { brushing: '2x/semaine', diet: 'Standard', mental: 'Jeux doux', exercise: 'Modéré' },
    health: { predispositions: ['HCM'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['ragdoll', 'persan'], popularity: 88
  }
];

export const popularBreeds = () => [...breeds].sort((a, b) => b.popularity - a.popularity);
export const breedBySlug = (slug: string) => breeds.find(b => b.slug === slug);`,

  // --- LE COMPOSANT HERO (Bannière animée) ---
  'src/components/home/Hero.tsx': `import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-forest">
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl text-cream leading-tight mb-6">
          Le monde fascinant des chats vous attend
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto">
          Explorez les races félines, découvrez leurs personnalités, leurs origines et leurs caractéristiques uniques.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4">
          <Link to="/races" className="bg-gold text-ink px-8 py-4 rounded-full font-semibold hover:bg-gold-soft transition flex items-center gap-2">
            Explorer les races <ArrowRight size={18} />
          </Link>
          <Link to="/galerie" className="border border-cream/50 text-cream px-8 py-4 rounded-full font-semibold hover:bg-cream/10 transition flex items-center gap-2">
            <Camera size={18} /> Voir la galerie
          </Link>
        </motion.div>
      </div>
    </section>
  );
}`,

  // --- LE COMPOSANT QUIZ ---
  'src/pages/Quiz.tsx': `import { useState } from 'react';
import { motion } from 'framer-motion';

export function Quiz() {
  const [step, setStep] = useState(0);
  const questions = [
    "Vivez-vous en appartement ou en maison ?",
    "Combien de temps pouvez-vous consacrer à votre chat ?",
    "Préférez-vous un chat calme ou actif ?",
    "Souhaitez-vous un chat très affectueux ?",
    "Acceptez-vous un entretien régulier du pelage ?"
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 min-h-[60vh]">
      <h1 className="text-4xl text-forest mb-8 text-center">Quel chat est fait pour vous ?</h1>
      {step < questions.length ? (
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 rounded-3xl shadow-soft">
          <p className="text-sm text-gold mb-2">Question {step + 1} / {questions.length}</p>
          <h2 className="text-2xl text-forest mb-6">{questions[step]}</h2>
          <div className="space-y-3">
            <button onClick={() => setStep(step + 1)} className="w-full text-left p-4 rounded-xl border border-forest/10 hover:border-gold hover:bg-cream transition">Option A (Ex: Calme)</button>
            <button onClick={() => setStep(step + 1)} className="w-full text-left p-4 rounded-xl border border-forest/10 hover:border-gold hover:bg-cream transition">Option B (Ex: Actif)</button>
          </div>
        </motion.div>
      ) : (
        <div className="bg-white p-8 rounded-3xl shadow-soft text-center">
          <h2 className="text-2xl text-forest mb-4">Résultat</h2>
          <p className="text-ink/70 mb-6">D'après vos réponses, le <strong>Maine Coon</strong> semble être un excellent match !</p>
          <button onClick={() => setStep(0)} className="text-gold font-semibold">Recommencer</button>
        </div>
      )}
    </div>
  );
}`,

  // --- LA PAGE GALERIE ---
  'src/pages/GalleryPage.tsx': `export function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl text-forest mb-4">Galerie</h1>
      <p className="text-ink/70 mb-8">Retrouvez les plus belles photographies de nos félins.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="aspect-square bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition cursor-pointer">
             <img src={\`https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=600&auto=format&fit=crop&sig=\${i}\`} alt="Chat" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}`,

  // --- LE COMPOSANT FOOTER ---
  'src/components/layout/Footer.tsx': `import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-forest text-cream py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-2xl mb-4 text-gold">CAT WORLD</h3>
          <p className="text-sm text-cream/70">L'encyclopédie numérique dédiée aux races félines. Découvrez, apprenez, partagez.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link to="/" className="hover:text-gold">Accueil</Link></li>
            <li><Link to="/races" className="hover:text-gold">Les races</Link></li>
            <li><Link to="/galerie" className="hover:text-gold">Galerie</Link></li>
            <li><Link to="/quiz" className="hover:text-gold">Quiz</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Informations</h4>
          <p className="text-xs text-cream/50">Les informations fournies sur ce site sont éducatives et ne remplacent pas une consultation vétérinaire.</p>
          <p className="text-xs text-cream/50 mt-4">© {new Date().getFullYear()} CAT WORLD. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}`,

  // --- LE FICHIER APP.TSX (ASSEMBLAGE FINAL) ---
  'src/App.tsx': `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Breeds } from './pages/Breeds';
import { BreedDetail } from './pages/BreedDetail';
import { Quiz } from './pages/Quiz';
import { GalleryPage } from './pages/GalleryPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/races" element={<Breeds />} />
          <Route path="/races/:slug" element={<BreedDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/galerie" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}`,

  // --- MISE A JOUR DU MENU HEADER ---
  'src/components/layout/Header.tsx': `import { Link, NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';

export function Header() {
  const favCount = useFavorites(s => s.favorites.length);
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold text-forest">CAT WORLD</Link>
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className="text-ink hover:text-gold font-medium">Accueil</NavLink>
          <NavLink to="/races" className="text-ink hover:text-gold font-medium">Races</NavLink>
          <NavLink to="/galerie" className="text-ink hover:text-gold font-medium">Galerie</NavLink>
          <NavLink to="/quiz" className="text-ink hover:text-gold font-medium">Quiz</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/favoris" className="relative p-2">
            <Heart className="text-forest" />
            {favCount > 0 && <span className="absolute top-0 right-0 bg-gold text-xs rounded-full w-4 h-4 flex items-center justify-center">{favCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}`,

  // --- MISE A JOUR ACCUEIL ---
  'src/pages/Home.tsx': `import { Hero } from '../components/home/Hero';
import { breeds } from '../data/breeds';
import { BreedCard } from '../components/breeds/BreedCard';

export function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl text-forest mb-8">Les races populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {breeds.slice(0, 4).map(b => <BreedCard key={b.slug} breed={b} />)}
        </div>
      </div>
    </div>
  );
}`
};

Object.entries(files).forEach(([filepath, content]) => {
  const fullPath = path.join(process.cwd(), filepath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content);
});

console.log('✅ Site CAT WORLD COMPLET généré avec succès !');
console.log('👉 Relance ton serveur avec : npm run dev');