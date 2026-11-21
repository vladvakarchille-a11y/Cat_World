export interface Breed {
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
}