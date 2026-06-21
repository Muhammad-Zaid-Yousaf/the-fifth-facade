import { Link } from 'react-router-dom';

function ProjectCard({ project, onPreview }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.summary}</p>
        <div className="project-actions">
          <button className="button button-secondary" type="button" onClick={() => onPreview(project.slug)}>
            Preview
          </button>
          <Link to={`/projects/${project.slug}`} className="button button-primary">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
