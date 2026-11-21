import { breeds } from '../data/breeds';
import { BreedCard } from '../components/breeds/BreedCard';
import { useSitePreferences } from '../context/SitePreferences';

export function Breeds() {
  const { t } = useSitePreferences();
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl text-forest mb-8">{t('allBreeds')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {breeds.map(b => <BreedCard key={b.slug} breed={b} />)}
      </div>
    </div>
  );
}