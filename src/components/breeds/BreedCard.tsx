import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import type { Breed } from '../../data/types';
import { useFavorites } from '../../hooks/useFavorites';
import { useSitePreferences } from '../../context/SitePreferences';

export function BreedCard({ breed }: { breed: Breed }) {
  const { isFav, toggle } = useFavorites();
  const { t } = useSitePreferences();
  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
        <img src={breed.images.hero} alt={breed.name} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        <div className="absolute top-4 right-4 z-10">
          <button onClick={() => toggle(breed.slug)} aria-label={isFav(breed.slug) ? `Remove ${breed.name} from favorites` : `Add ${breed.name} to favorites`} aria-pressed={isFav(breed.slug)} className={`p-2 rounded-full ${isFav(breed.slug) ? 'bg-gold' : 'bg-white'}`}>
            <Heart size={18} fill={isFav(breed.slug) ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl text-forest">{breed.name}</h3>
        <p className="text-sm text-ink/70 mt-2">{breed.origin.flag} {breed.origin.country}</p>
        <Link to={`/races/${breed.slug}`} className="mt-4 block text-gold font-semibold">{t('discover')}</Link>
      </div>
    </article>
  );
}