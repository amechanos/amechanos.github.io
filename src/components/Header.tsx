import { useState, useEffect } from "react";
import "../styles/header.css";
import SocialLinks from './SocialLinks'

export default function Header() {
  const [rotation, setRotation] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>(typeof window !== 'undefined' ? window.location.hash || '#projects' : '#projects');

  useEffect(() => {
    const onHashChange = () => setActive(window.location.hash || '#projects');
    const onResize = () => { if (window.innerWidth > 640 && menuOpen) setMenuOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };

    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const handleNavClick = (hash: string) => {
    setActive(hash);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand-link" onClick={() => { setMenuOpen(false); setActive(''); }}>
          <div className="brand">
              <img
                className="logo"
                src="public/assets/logo.png"
                alt="site logo"
                width={55}
                onMouseEnter={() => setRotation(r => r + 180)}
                onMouseLeave={() => setRotation(r => r + 180)}
                style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 800ms cubic-bezier(.6,.2,.5,1)' }}
              />
              <h2> jhxu </h2>
          </div>
        </a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav id="primary-nav" className={`nav ${menuOpen ? 'open' : ''}`} role="navigation" aria-label="Primary navigation">
          <a href="#projects" className={active === '#projects' ? 'active' : ''} onClick={() => handleNavClick('#projects')}>Work</a>
          <a href="#about" className={active === '#about' ? 'active' : ''} onClick={() => handleNavClick('#about')}>About</a>
          <a href="#contact" className={`cta ${active === '#contact' ? 'active' : ''}`} onClick={() => handleNavClick('#contact')}>Contact</a>
        </nav>

        <div className="header-actions" aria-hidden>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
} 
