import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMemo, useEffect } from 'react';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';

function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="app-shell">
        <div className="section-intro">
          <div className="section-heading">
            <span>Project not found</span>
            <h2>Sorry, that project does not exist.</h2>
          </div>
          <div className="hero-actions">
            <button className="button button-secondary" onClick={() => navigate(-1)}>
              Back
            </button>
            <Link to="/projects" className="button button-primary">
              All projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell project-details-page">
      <Navbar />
      <nav className="details-nav">
        <Link to="/projects" className="button button-secondary">Back to projects</Link>
      </nav>

      <section className="project-detail-hero">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
        </div>
      </section>

      <section className="project-gallery">
        {project.gallery.map((src) => (
          <img key={src} src={src} alt={`${project.title} gallery`} loading="lazy" />
        ))}
      </section>

      <section className="project-detail-content">
        <div>
          <h2>Project details</h2>
          <p>{project.details}</p>
        </div>
        <div className="highlight-list">
          {project.highlights.map((item) => (
            <div key={item} className="highlight-card">
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
