import './App.css'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Media } from './components/MediaPlayer'

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('useEffect running');
    
    const bgElement = document.querySelector('.parallax-bg');
    const gradientElement = document.querySelector('.parallax-gradient');

    console.log('bgElement found:', bgElement);
    console.log('gradientElement found:', gradientElement);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bgElement = document.querySelector('.parallax-bg') as HTMLElement;
      const gradientElement = document.querySelector('.parallax-gradient') as HTMLElement;

      if (bgElement && gradientElement) {
        // Background movement
        bgElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;

        // Calculate intended movement
        const targetTranslate = scrollPosition * -0.25;
        const clampedTranslate = Math.min(targetTranslate, -750);

        gradientElement.style.bottom = `${clampedTranslate}px`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="site-root">
        <div className="parallax-bg"></div>
        <div className="parallax-gradient"></div>
        <div id="top" />
        <Header />
        <main id="main">
          <Hero />
          <Media />
          <Portfolio />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;