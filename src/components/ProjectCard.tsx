import React from 'react'
import '../styles/projects.css'

type Props = {
  title: string
  description: string
  tech: string[]
  url?: string
}

export default function ProjectCard({ title, description, tech, url }: Props) {
  return (
    <article className="project-card">
      {/* <div className="card-media" /> */}
      <div className="card-body">
        <h3>{title}</h3>
        <p className="muted">{description}</p>
        <div className="tags">{tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        <a className="link" href={url ?? '#'}>View project →</a>
      </div>
    </article>
  )
}
