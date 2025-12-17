import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="container" style={{ padding: '3rem 0' }}>
      <h2 style={{ marginBottom: '1rem' }}>Selected projects</h2>
      <p className="muted" style={{ marginBottom: '1.5rem' }}>A few highlights — more in the repo.</p>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} title={p.title} description={p.description} tech={p.tech} url={p.url} />
        ))}
      </div>
    </section>
  )
}
