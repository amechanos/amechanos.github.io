import { Link } from 'react-router-dom'; // Import this
import '../styles/projects.css';

type Props = {
  casestudy: boolean;
  title: string;
  description: string;
  tech: string[];
  url?: string;
}

export default function ProjectCard({ casestudy, title, description, tech, url }: Props) {
  const linkText = casestudy ? "View case study →" : "View project →";
  
  // Logic: Use <Link> for internal Case Studies, <a> for external projects
  return (
    <article className="project-card">
      <div className="card-body">
        <h3>{title}</h3>
        <p className="muted">{description}</p>
        <div className="tags">
          {tech.map((t) => (
            <span key={t} className="tag">{t.trim()}</span>
          ))}
        </div>

        {casestudy ? (
          // Internal Link for React Router
          <Link className="link" to={url ?? '/'}>
            {linkText}
          </Link>
        ) : (
          // External Link for Experiments/Hobby projects
          <a 
            className="link" 
            href={url ?? '#'} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {linkText}
          </a>
        )}
      </div>
    </article>
  );
}