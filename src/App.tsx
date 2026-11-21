import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Breeds } from './pages/Breeds';
import { BreedDetail } from './pages/BreedDetail';
import { Quiz } from './pages/Quiz';
import { GalleryPage } from './pages/GalleryPage';
import { SitePreferencesProvider } from './context/SitePreferences';

export default function App() {
  return (
    <SitePreferencesProvider>
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/races" element={<Breeds />} />
            <Route path="/races/:slug" element={<BreedDetail />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/galerie" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </SitePreferencesProvider>
  );
}