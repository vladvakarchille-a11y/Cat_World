import { Hero } from '../components/home/Hero';
import { breeds } from '../data/breeds';
import { BreedCard } from '../components/breeds/BreedCard';
import { useSitePreferences } from '../context/SitePreferences';

export function Home() {
  const { t } = useSitePreferences();
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl text-forest mb-8">{t('popularBreeds')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {breeds.slice(0, 4).map(b => <BreedCard key={b.slug} breed={b} />)}
        </div>
      </div>
    </div>
  );
}