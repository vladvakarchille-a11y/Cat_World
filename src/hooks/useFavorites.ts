import { create } from 'zustand';
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
);