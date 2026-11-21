import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'ar';

const translations = {
  fr: {
    home: 'Accueil', breeds: 'Races', gallery: 'Galerie', quiz: 'Quiz', contact: 'Contact',
    popularBreeds: 'Les races populaires', allBreeds: 'Toutes les races', explore: 'Explorer les races',
    viewGallery: 'Voir la galerie', heroTitle: 'Le monde fascinant des chats vous attend',
    heroDescription: 'Explorez les races félines, découvrez leurs personnalités, leurs origines et leurs caractéristiques uniques.',
    discover: 'Découvrir', galleryDescription: 'Retrouvez les plus belles photographies de nos félins.',
    footerDescription: "L'encyclopédie numérique dédiée aux races félines. Découvrez, apprenez, partagez.",
    quickLinks: 'Liens rapides', information: 'Informations', contactDescription: 'Une question ou une suggestion ? Nous serions ravis de vous lire.',
    theme: 'Changer de thème', language: 'Langue', favorites: 'Favoris',
    photoCredits: 'Crédits des photos',
    quizTitle: 'Quel chat est fait pour vous ?', question: 'Question', optionCalm: 'Option A (ex. : calme)',
    optionActive: 'Option B (ex. : actif)', result: 'Résultat', resultDescription: 'D’après vos réponses, le Maine Coon semble être un excellent compagnon !',
    restart: 'Recommencer', characteristics: 'Caractéristiques', origin: 'Origine', size: 'Taille', weight: 'Poids',
    breedNotFound: 'Race introuvable.', veterinaryNotice: 'Les informations fournies sur ce site sont éducatives et ne remplacent pas une consultation vétérinaire.',
    questionApartment: 'Vivez-vous en appartement ou en maison ?', questionTime: 'Combien de temps pouvez-vous consacrer à votre chat ?',
    questionTemperament: 'Préférez-vous un chat calme ou actif ?', questionAffection: 'Souhaitez-vous un chat très affectueux ?',
    questionGrooming: 'Acceptez-vous un entretien régulier du pelage ?',
  },
  en: {
    home: 'Home', breeds: 'Breeds', gallery: 'Gallery', quiz: 'Quiz', contact: 'Contact',
    popularBreeds: 'Popular breeds', allBreeds: 'All breeds', explore: 'Explore breeds',
    viewGallery: 'View gallery', heroTitle: 'The fascinating world of cats awaits',
    heroDescription: 'Explore cat breeds and discover their personalities, origins, and unique traits.',
    discover: 'Discover', galleryDescription: 'Explore beautiful photographs of our feline friends.',
    footerDescription: 'A digital encyclopedia dedicated to cat breeds. Discover, learn, and share.',
    quickLinks: 'Quick links', information: 'Information', contactDescription: 'Have a question or suggestion? We would love to hear from you.',
    theme: 'Toggle theme', language: 'Language', favorites: 'Favorites',
    photoCredits: 'Photo credits',
    quizTitle: 'Which cat is right for you?', question: 'Question', optionCalm: 'Option A (e.g. calm)',
    optionActive: 'Option B (e.g. active)', result: 'Result', resultDescription: 'Based on your answers, the Maine Coon seems like a great companion!',
    restart: 'Start again', characteristics: 'Characteristics', origin: 'Origin', size: 'Size', weight: 'Weight',
    breedNotFound: 'Breed not found.', veterinaryNotice: 'The information on this site is educational and does not replace veterinary advice.',
    questionApartment: 'Do you live in an apartment or a house?', questionTime: 'How much time can you spend with your cat?',
    questionTemperament: 'Do you prefer a calm or active cat?', questionAffection: 'Would you like a very affectionate cat?',
    questionGrooming: 'Are you comfortable with regular coat grooming?',
  },
  ar: {
    home: 'الرئيسية', breeds: 'السلالات', gallery: 'معرض الصور', quiz: 'اختبار', contact: 'اتصل بنا',
    popularBreeds: 'السلالات الشائعة', allBreeds: 'جميع السلالات', explore: 'استكشف السلالات',
    viewGallery: 'عرض المعرض', heroTitle: 'عالم القطط الساحر في انتظارك',
    heroDescription: 'استكشف سلالات القطط واكتشف شخصياتها وأصولها وخصائصها الفريدة.',
    discover: 'اكتشف', galleryDescription: 'شاهد أجمل صور أصدقائنا من القطط.',
    footerDescription: 'موسوعة رقمية مخصصة لسلالات القطط. اكتشف وتعلم وشارك.',
    quickLinks: 'روابط سريعة', information: 'معلومات', contactDescription: 'هل لديك سؤال أو اقتراح؟ يسعدنا أن نسمع منك.',
    theme: 'تغيير المظهر', language: 'اللغة', favorites: 'المفضلة',
    photoCredits: 'مصادر الصور',
    quizTitle: 'أي قطة تناسبك؟', question: 'السؤال', optionCalm: 'الخيار أ (مثال: هادئة)',
    optionActive: 'الخيار ب (مثال: نشيطة)', result: 'النتيجة', resultDescription: 'بناءً على إجاباتك، تبدو قطة ماين كون رفيقًا رائعًا لك!',
    restart: 'أعد الاختبار', characteristics: 'الخصائص', origin: 'الأصل', size: 'الحجم', weight: 'الوزن',
    breedNotFound: 'السلالة غير موجودة.', veterinaryNotice: 'المعلومات الواردة في هذا الموقع تعليمية ولا تغني عن استشارة الطبيب البيطري.',
    questionApartment: 'هل تعيش في شقة أم في منزل؟', questionTime: 'كم من الوقت يمكنك تخصيصه لقطتك؟',
    questionTemperament: 'هل تفضل قطة هادئة أم نشيطة؟', questionAffection: 'هل ترغب في قطة ودودة جدًا؟',
    questionGrooming: 'هل يناسبك الاعتناء المنتظم بفراء القطة؟',
  },
} as const;

type TranslationKey = keyof typeof translations.fr;

interface SitePreferencesValue {
  language: Language;
  setLanguage: (language: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  t: (key: TranslationKey) => string;
}

const SitePreferencesContext = createContext<SitePreferencesValue | null>(null);

function readStoredLanguage(): Language {
  const stored = window.localStorage.getItem('cat-world-language');
  return stored === 'en' || stored === 'ar' ? stored : 'fr';
}

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readStoredLanguage);
  const [darkMode, setDarkMode] = useState(() => window.localStorage.getItem('cat-world-dark') === 'true');

  useEffect(() => {
    window.localStorage.setItem('cat-world-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('cat-world-dark', String(darkMode));
  }, [darkMode]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    darkMode,
    toggleDarkMode: () => setDarkMode(current => !current),
    t: (key: TranslationKey) => translations[language][key],
  }), [language, darkMode]);

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>;
}

export function useSitePreferences() {
  const value = useContext(SitePreferencesContext);
  if (!value) throw new Error('useSitePreferences must be used within SitePreferencesProvider');
  return value;
}
