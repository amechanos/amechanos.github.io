import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import '../styles/projects.css'

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <ProjectCard casestudy={p.casestudy} key={p.id} title={p.title} description={p.description} tech={p.tech} url={p.url} />
      ))}
    </div>
  )
}
