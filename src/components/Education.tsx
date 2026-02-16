import '../styles/projects.css'

export default function Education() {
  const items = [
    { id: 'edu-1', title: 'Trinity Grammar School', subtitle: 'High school', year: '2020-2025', desc: 'Graduated with ATAR of 93.20 and VCE Media Studies Prize.' },
    { id: 'edu-2', title: 'Monash University', subtitle: 'Double Bachelor Degree', year: '2026-2030', desc: 'An IT/Design double degree majoring in Games & Immersive Media' },
  ]

  return (
    <div className="education-list">
      {items.map((it) => (
        <article key={it.id} className="project-card">
          <div className="card-body">
            <h3>{it.title}</h3>
            <p className="muted">{it.subtitle} • {it.year}</p>
            <p>{it.desc}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
