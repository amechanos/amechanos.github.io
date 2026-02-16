import '../styles/projects.css'

export default function Awards() {
  const items = [
    { id: 'award-1', title: 'VCE Media Studies Prize', year: '2025', issuer: 'Trinity Grammar School' },
    { id: 'award-2', title: 'Digital Technology Award', year: '2019', issuer: 'Gardens Primary School' },
    { id: 'award-3', title: 'VCAA 2026 Season of Excellence Top Designs', year: '2026', issuer: 'Victorian Curriculum and Assessment Authority' },
  ]

  return (
    <div className="awards-list">
      {items.map((a) => (
        <article key={a.id} className="project-card">
          <div className="card-body">
            <h3>{a.title}</h3>
            <p className="muted">{a.year} • {a.issuer}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
