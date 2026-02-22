import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css'
import './index.css'

// Import your pages
import Home from './home.tsx';
import CaseStudyPage from './components/CaseStudy.tsx';

// Simple component to fix the "scroll to top" issue when changing pages
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bgElement = document.querySelector('.parallax-bg') as HTMLElement;
      const gradientElement = document.querySelector('.parallax-gradient') as HTMLElement;

      if (bgElement && gradientElement) {
        bgElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        // Your logic for the gradient
        const targetTranslate = scrollPosition * 0.25;
        const clampedTranslate = Math.min(targetTranslate, 0); // Ensure no positive translation
        gradientElement.style.transform = `translateY(${clampedTranslate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="site-root">
       
        <div className="parallax-bg"></div>
        <div className="parallax-gradient"></div>
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          <Route path="/work/:projectId" element={<CaseStudyPage />} />
          
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;