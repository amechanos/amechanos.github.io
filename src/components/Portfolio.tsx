import { useState } from 'react'
import Projects from './Projects'
import Education from './Education'
import Awards from './Awards'
import '../styles/portfolio.css'

type View = 'projects' | 'education' | 'awards'

export default function Portfolio() {
  const [view, setView] = useState<View>('projects')

  return (
    <section id="projects" className="container portfolio-root" style={{ padding: '3rem 0' }}>
      <div className="portfolio-switcher" role="tablist" aria-label="Portfolio views">
        <button
          className={`switch-btn ${view === 'projects' ? 'active' : ''}`}
          onClick={() => setView('projects')}
          aria-selected={view === 'projects'}
        >
          Projects
        </button>

        <button
          className={`switch-btn ${view === 'education' ? 'active' : ''}`}
          onClick={() => setView('education')}
          aria-selected={view === 'education'}
        >
          Education
        </button>

        <button
          className={`switch-btn ${view === 'awards' ? 'active' : ''}`}
          onClick={() => setView('awards')}
          aria-selected={view === 'awards'}
        >
          Awards
        </button>
      </div>

      <div className="view-content">
        {view === 'projects' && <Projects />}
        {view === 'education' && <Education />}
        {view === 'awards' && <Awards />}
      </div>
    </section>
  )
}
