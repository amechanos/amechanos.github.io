import { useParams, Link } from 'react-router-dom';
import { projectContent } from '../data/caseStudies'; // Adjust path as needed

import Header from './Header'
import Footer from './Footer'

import '../styles/casestudy.css'

export default function CaseStudyPage() {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Look up the project data based on the URL ID
  const project = projectId ? projectContent[projectId as keyof typeof projectContent] : null;

  // Handle case where project doesn't exist
  if (!project) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Project not found</h1>
        <Link to="/">Return Home</Link>
      </div>
    );
  }

  return (
    <>
      <Header />
        <main className="case-study-container">
        <nav className="btn-back">
          <Link to="/#projects">← Back to Projects</Link>
        </nav>
        <div className="case-study-header">
          <h2>{project.title}</h2>
        </div>

          <section className="links-bar">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
              View Live Product
            </a>
            <a href={project.process} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View Full Folio (PDF)
            </a>
          </section>

          <section className="content-body">

            <div className="section">
              <h3>Overview</h3>
              <p>{project.p1}</p>
            </div>

            <div className="section">
              <h3>Development Process</h3>
              <p>{project.p2}</p>
            </div>

            <div className="section">
              <h3>What I'd Do Differently</h3>
              <ul className="retro-list">
                {project.retro.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </section>

        </main>
      <Footer />
    </>
  );
}