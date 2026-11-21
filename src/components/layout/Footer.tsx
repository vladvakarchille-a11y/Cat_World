import { Link } from 'react-router-dom';
import { useSitePreferences } from '../../context/SitePreferences';

export function Footer() {
  const { t } = useSitePreferences();
  return (
    <footer className="bg-forest text-cream py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-2xl mb-4 text-gold">CAT WORLD</h3>
          <p className="text-sm text-cream/70">{t('footerDescription')}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">{t('quickLinks')}</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link to="/">{t('home')}</Link></li>
            <li><Link to="/races">{t('breeds')}</Link></li>
            <li><Link to="/galerie">{t('gallery')}</Link></li>
            <li><Link to="/quiz">{t('quiz')}</Link></li>
            <li><a href="#contact">{t('contact')}</a></li>
            <li><a href="/images/credits.txt" target="_blank" rel="noreferrer">{t('photoCredits')}</a></li>
          </ul>
        </div>
        <div id="contact">
          <h4 className="font-semibold mb-4">{t('contact')}</h4>
          <p className="text-sm text-cream/70 mb-4">{t('contactDescription')}</p>
          <h4 className="font-semibold mb-4">{t('information')}</h4>
          <p className="text-xs text-cream/50">{t('veterinaryNotice')}</p>
          <p className="text-xs text-cream/50 mt-4">© {new Date().getFullYear()} CAT WORLD. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}