import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Use Link for cross-page navigation
import "../styles/header.css";
import logo from '../assets/logo.svg'; 

export default function Header() {
  const [rotation, setRotation] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Better than window.location for React
  const [active, setActive] = useState(location.hash || '#projects');

  useEffect(() => {
    // Sync active state with the current hash
    setActive(location.hash || '#projects');
    
    const onResize = () => { if (window.innerWidth > 640 && menuOpen) setMenuOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };

    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
    };
  }, [location, menuOpen]);

  const handleNavClick = (hash: string) => {
    setActive(hash);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Change <a> to <Link> so it works from Case Study pages back to Home */}
        <Link to="/#top" className="brand-link" onClick={() => { setMenuOpen(false); setActive(''); }}>
          <div className="brand">
              <img
                className="logo"
                src={logo}
                alt="site logo"
                width={55}
                onMouseEnter={() => setRotation(r => r + 180)}
                onMouseLeave={() => setRotation(r => r + 180)}
                style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 800ms cubic-bezier(.6,.2,.5,1)' }}
              />
              <h2> jhxu </h2>
          </div>
        </Link>

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
          {/* Use Link to to="/" so if you are on a Case Study page, these links actually take you home */}
          <Link to="/#projects" className={active === '#projects' ? 'active' : ''} onClick={() => handleNavClick('#projects')}>Work</Link>
          <Link to="/#about" className={active === '#about' ? 'active' : ''} onClick={() => handleNavClick('#about')}>About</Link>
          <Link to="/#contact" className={`cta ${active === '#contact' ? 'active' : ''}`} onClick={() => handleNavClick('#contact')}>Contact</Link>
        </nav>

      </div>
    </header>
  );
}