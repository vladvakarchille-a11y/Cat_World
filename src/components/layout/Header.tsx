import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Menu, Moon, Sun, X } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';
import { useSitePreferences, type Language } from '../../context/SitePreferences';

function isLanguage(value: string): value is Language {
  return value === 'fr' || value === 'en' || value === 'ar';
}

export function Header() {
  const favCount = useFavorites(s => s.favorites.length);
  const { language, setLanguage, darkMode, toggleDarkMode, t } = useSitePreferences();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { to: '/', label: t('home') },
    { to: '/races', label: t('breeds') },
    { to: '/galerie', label: t('gallery') },
    { to: '/quiz', label: t('quiz') },
  ];

  return (
    <header className="site-header sticky top-0 z-50 backdrop-blur border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold text-forest">CAT WORLD</Link>
        <nav className="hidden md:flex items-center gap-2" aria-label="Navigation principale">
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/#contact" className="nav-link">{t('contact')}</Link>
        </nav>
        <div className="flex items-center gap-4">
          <label className="sr-only" htmlFor="language-select">{t('language')}</label>
          <select
            id="language-select"
            aria-label={t('language')}
            value={language}
            onChange={event => {
              if (isLanguage(event.target.value)) setLanguage(event.target.value);
            }}
            className="language-select"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="ar">عربي</option>
          </select>
          <button onClick={toggleDarkMode} className="icon-button hidden sm:inline-flex" aria-label={t('theme')} title={t('theme')}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/favoris" className="relative p-2">
            <Heart className="text-forest" aria-label={t('favorites')} />
            {favCount > 0 && <span className="absolute top-0 right-0 bg-gold text-xs rounded-full w-4 h-4 flex items-center justify-center">{favCount}</span>}
          </Link>
          <button className="icon-button md:hidden" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mobile-nav md:hidden overflow-hidden"
            aria-label="Navigation mobile"
          >
            {navItems.map((item, index) => (
              <motion.div key={item.to} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                <NavLink to={item.to} end={item.to === '/'} onClick={() => setMenuOpen(false)} className="mobile-nav-link">{item.label}</NavLink>
              </motion.div>
            ))}
            <Link to="/#contact" onClick={() => setMenuOpen(false)} className="mobile-nav-link">{t('contact')}</Link>
            <button onClick={toggleDarkMode} className="mobile-nav-link flex items-center gap-3">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />} {t('theme')}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}