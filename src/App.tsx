import './App.css'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
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
    console.log('bgElement found:', bgElement);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log('Scroll event fired, position:', scrollPosition);
      
      const bgElement = document.querySelector('.parallax-bg');
      if (bgElement) {
        console.log('Applying transform');
        (bgElement as HTMLElement).style.transform = `translateY(${scrollPosition * -0.17}px)`;
      } else {
        console.log('bgElement not found during scroll');
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
        <div id="top" />
        <Header />
        <main id="main">
          <Hero />
          <Media />
          <Projects />
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