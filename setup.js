// Copie TOUT ce bloc et colle-le dans un fichier nommé "setup.js" à la racine de ton dossier vide.
// Puis tape dans le terminal : node setup.js

const fs = require('fs');
const path = require('path');

const files = {
  'package.json': `{
  "name": "cat-world",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.3.0",
    "lucide-react": "^0.427.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "zustand": "^4.5.4"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7",
    "typescript": "^5.5.0",
    "vite": "^5.4.0"
  }
}`,
  'vite.config.ts': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});`,
  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#244B3C', light: '#2F5F4C', dark: '#193228' },
        cream: { DEFAULT: '#F6F1E8', soft: '#FBF8F2' },
        gold: { DEFAULT: '#C5A46D', soft: '#DCC9A3' },
        ink: '#333333',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: { '2xl': '1.25rem', '3xl': '1.75rem' },
      boxShadow: {
        soft: '0 4px 20px -8px rgba(36,75,60,0.15)',
        card: '0 10px 40px -12px rgba(36,75,60,0.18)',
      },
    },
  },
  plugins: [],
}`,
  'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,
  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true
  },
  "include": ["src"]
}`,
  'index.html': `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CAT WORLD</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
  'src/main.tsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,
  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

body { @apply bg-cream-soft text-ink font-sans antialiased; }
h1, h2, h3, h4 { @apply font-serif; }`,
  'src/App.tsx': `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Breeds } from './pages/Breeds';
import { BreedDetail } from './pages/BreedDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/races" element={<Breeds />} />
          <Route path="/races/:slug" element={<BreedDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}`,
  'src/data/types.ts': `export interface Breed {
  slug: string;
  name: string;
  origin: { country: string; flag: string };
  history: { period: string; summary: string; recognisedBy: string[] };
  images: { hero: string; gallery: any[] };
  physical: {
    size: string; weightKg: [number, number]; lifespanYears: [number, number];
    coatLength: string; coatPatterns: string[]; eyeColors: string[];
    headShape: string; bodyType: string;
  };
  personality: {
    temperament: string[]; affection: number; sociability: number; intelligence: number;
    curiosity: number; activity: number; groomingNeed: number;
    withChildren: number; withPets: number; apartmentFriendly: number;
  };
  care: { brushing: string; diet: string; mental: string; exercise: string };
  health: { predispositions: string[]; recommendedScreenings: string[]; disclaimer: string };
  videos: any[];
  similar: string[];
  popularity: number;
}`,
  'src/data/breeds.ts': `import type { Breed } from './types';

export const breeds: Breed[] = [
  {
    slug: 'maine-coon', name: 'Maine Coon', origin: { country: 'États-Unis', flag: '🇺🇸' },
    history: { period: 'XIXe s.', summary: 'Race naturelle américaine.', recognisedBy: ['CFA', 'TICA'] },
    images: { hero: '/images/maine-coon.jpg', gallery: [] },
    physical: { size: 'grande', weightKg: [4.5, 11], lifespanYears: [12, 15], coatLength: 'long', coatPatterns: ['tabby'], eyeColors: ['vert'], headShape: 'carrée', bodyType: 'robuste' },
    personality: { temperament: ['doux', 'sociable'], affection: 5, sociability: 5, intelligence: 4, curiosity: 4, activity: 3, groomingNeed: 4, withChildren: 5, withPets: 5, apartmentFriendly: 3 },
    care: { brushing: '2x/semaine', diet: 'Protéines', mental: 'Jeux', exercise: 'Actif' },
    health: { predispositions: ['HCM'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['siamois'], popularity: 98
  },
  {
    slug: 'siamois', name: 'Siamois', origin: { country: 'Thaïlande', flag: '🇹🇭' },
    history: { period: 'XIVe s.', summary: 'Originaire du Siam.', recognisedBy: ['CFA', 'TICA'] },
    images: { hero: '/images/siamois.jpg', gallery: [] },
    physical: { size: 'moyenne', weightKg: [3, 5], lifespanYears: [12, 20], coatLength: 'court', coatPatterns: ['point'], eyeColors: ['bleu'], headShape: 'triangulaire', bodyType: 'svelte' },
    personality: { temperament: ['bavard', 'affectueux'], affection: 5, sociability: 5, intelligence: 5, curiosity: 5, activity: 4, groomingNeed: 1, withChildren: 4, withPets: 4, apartmentFriendly: 5 },
    care: { brushing: 'Rare', diet: 'Standard', mental: 'Interaction', exercise: 'Jeux' },
    health: { predispositions: ['Amyloïdose'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['maine-coon'], popularity: 90
  }
];

export const breedBySlug = (slug: string) => breeds.find(b => b.slug === slug);`,
  'src/hooks/useFavorites.ts': `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavState = {
  favorites: string[];
  toggle: (slug: string) => void;
  isFav: (slug: string) => boolean;
};

export const useFavorites = create<FavState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggle: (slug) => set(s => ({
        favorites: s.favorites.includes(slug)
          ? s.favorites.filter(x => x !== slug)
          : [...s.favorites, slug]
      })),
      isFav: (slug) => get().favorites.includes(slug),
    }),
    { name: 'catworld-favorites' }
  )
);`,
  'src/components/layout/Header.tsx': `import { Link, NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';

export function Header() {
  const favCount = useFavorites(s => s.favorites.length);
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold text-forest">CAT WORLD</Link>
        <nav className="flex gap-6">
          <NavLink to="/" className="text-ink hover:text-gold font-medium">Accueil</NavLink>
          <NavLink to="/races" className="text-ink hover:text-gold font-medium">Races</NavLink>
        </nav>
        <Link to="/favoris" className="relative p-2">
          <Heart className="text-forest" />
          {favCount > 0 && <span className="absolute top-0 right-0 bg-gold text-xs rounded-full w-4 h-4 flex items-center justify-center">{favCount}</span>}
        </Link>
      </div>
    </header>
  );
}`,
  'src/components/breeds/BreedCard.tsx': `import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import type { Breed } from '../../data/types';
import { useFavorites } from '../../hooks/useFavorites';

export function BreedCard({ breed }: { breed: Breed }) {
  const { isFav, toggle } = useFavorites();
  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-soft">
      <div className="aspect-[4/3] bg-gray-200 relative">
        <div className="absolute top-4 right-4 z-10">
          <button onClick={() => toggle(breed.slug)} className={\`p-2 rounded-full \${isFav(breed.slug) ? 'bg-gold' : 'bg-white'}\`}>
            <Heart size={18} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl text-forest">{breed.name}</h3>
        <p className="text-sm text-ink/70 mt-2">{breed.origin.flag} {breed.origin.country}</p>
        <Link to={\`/races/\${breed.slug}\`} className="mt-4 block text-gold font-semibold">Découvrir</Link>
      </div>
    </article>
  );
}`,
  'src/pages/Home.tsx': `import { breeds } from '../data/breeds';
import { BreedCard } from '../components/breeds/BreedCard';

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl text-forest mb-8">Bienvenue sur CAT WORLD</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {breeds.map(b => <BreedCard key={b.slug} breed={b} />)}
      </div>
    </div>
  );
}`,
  'src/pages/Breeds.tsx': `import { breeds } from '../data/breeds';
import { BreedCard } from '../components/breeds/BreedCard';

export function Breeds() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl text-forest mb-8">Toutes les races</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {breeds.map(b => <BreedCard key={b.slug} breed={b} />)}
      </div>
    </div>
  );
}`,
  'src/pages/BreedDetail.tsx': `import { useParams } from 'react-router-dom';
import { breedBySlug } from '../data/breeds';

export function BreedDetail() {
  const { slug } = useParams();
  const breed = slug ? breedBySlug(slug) : undefined;
  if (!breed) return <p className="p-20 text-center">Race introuvable.</p>;

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-5xl text-forest mb-4">{breed.name}</h1>
      <p className="text-lg text-ink/70 mb-8">{breed.history.summary}</p>
      <div className="bg-white p-8 rounded-3xl shadow-soft">
        <h2 className="text-2xl text-forest mb-4">Caractéristiques</h2>
        <ul className="space-y-2 text-sm">
          <li><strong>Origine :</strong> {breed.origin.country}</li>
          <li><strong>Taille :</strong> {breed.physical.size}</li>
          <li><strong>Poids :</strong> {breed.physical.weightKg[0]} - {breed.physical.weightKg[1]} kg</li>
        </ul>
      </div>
    </article>
  );
}`
};

// Création des dossiers et fichiers
Object.entries(files).forEach(([filepath, content]) => {
  const fullPath = path.join(process.cwd(), filepath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content);
});

// Création du dossier public avec une image de base (placeholder)
if (!fs.existsSync('public')) fs.mkdirSync('public');
fs.writeFileSync('public/favicon.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#244B3C"/></svg>');

console.log('✅ Projet CAT WORLD généré avec succès !');
console.log('👉 Lance ces commandes dans ton terminal :');
console.log('   npm install');
console.log('   npm run dev');