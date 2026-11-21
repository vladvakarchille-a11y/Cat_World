import { useParams } from 'react-router-dom';
import { breedBySlug } from '../data/breeds';
import { useSitePreferences } from '../context/SitePreferences';

export function BreedDetail() {
  const { slug } = useParams();
  const breed = slug ? breedBySlug(slug) : undefined;
  const { t } = useSitePreferences();
  if (!breed) return <p className="p-20 text-center">{t('breedNotFound')}</p>;

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-5xl text-forest mb-4">{breed.name}</h1>
      <p className="text-lg text-ink/70 mb-8">{breed.history.summary}</p>
      <img src={breed.images.hero} alt={breed.name} className="mb-8 max-h-[28rem] w-full rounded-3xl object-cover shadow-soft" />
      <div className="bg-white p-8 rounded-3xl shadow-soft">
        <h2 className="text-2xl text-forest mb-4">{t('characteristics')}</h2>
        <ul className="space-y-2 text-sm">
          <li><strong>{t('origin')} :</strong> {breed.origin.country}</li>
          <li><strong>{t('size')} :</strong> {breed.physical.size}</li>
          <li><strong>{t('weight')} :</strong> {breed.physical.weightKg[0]} - {breed.physical.weightKg[1]} kg</li>
        </ul>
      </div>
    </article>
  );
}