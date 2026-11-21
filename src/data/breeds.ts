import type { Breed } from './types';

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
    images: { hero: '/images/sacre-de-birmanie.jpg', gallery: [] },
    physical: { size: 'moyenne', weightKg: [3.5, 6], lifespanYears: [12, 16], coatLength: 'mi-long', coatPatterns: ['point'], eyeColors: ['bleu'], headShape: 'arrondie', bodyType: 'robuste' },
    personality: { temperament: ['doux', 'sociable'], affection: 5, sociability: 5, intelligence: 4, curiosity: 3, activity: 3, groomingNeed: 3, withChildren: 5, withPets: 5, apartmentFriendly: 5 },
    care: { brushing: '2x/semaine', diet: 'Standard', mental: 'Jeux doux', exercise: 'Modéré' },
    health: { predispositions: ['HCM'], recommendedScreenings: ['Echo'], disclaimer: 'Consultez un véto.' },
    videos: [], similar: ['ragdoll', 'persan'], popularity: 88
  }
];

export const popularBreeds = () => [...breeds].sort((a, b) => b.popularity - a.popularity);
export const breedBySlug = (slug: string) => breeds.find(b => b.slug === slug);