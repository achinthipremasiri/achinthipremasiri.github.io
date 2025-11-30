import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import MagicCursor from './components/MagicCursor';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Publications from './pages/Publications';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text font-sans cursor-none selection:bg-secondary selection:text-white">
      <MagicCursor />
      
      <HashRouter>
        <ScrollToTop />
        <Navigation />
        
        <main className="max-w-[1100px] mx-auto px-5 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="mt-auto py-8 text-center text-gray-400 text-sm border-t border-gray-200 bg-white">
          <p>© {new Date().getFullYear()} Achinthi Premasiri. All rights reserved.</p>
          <p className="mt-1 text-xs">Agricultural Scientist & Researcher</p>
        </footer>
      </HashRouter>
    </div>
  );
};

export default App;
