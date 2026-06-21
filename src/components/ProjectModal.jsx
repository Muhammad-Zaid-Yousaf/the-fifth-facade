import { useEffect, useState } from 'react';

function ProjectModal({ project, onClose, onPrev, onNext }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  const gallery = project.gallery ?? [];
  const prevImg = () => setImgIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const nextImg = () => setImgIndex((i) => (i + 1) % gallery.length);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close project preview">
          ×
        </button>
        <div className="modal-grid">
          <div className="modal-gallery">
            <img key={gallery[imgIndex]} src={gallery[imgIndex]} alt={project.title} loading="lazy" />
            {gallery.length > 1 && (
              <div className="slider-controls">
                <button className="button button-secondary slider-arrow" type="button" onClick={prevImg}>‹</button>
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    className={`slider-dot${i === imgIndex ? ' active' : ''}`}
                    type="button"
                    onClick={() => setImgIndex(i)}
                  />
                ))}
                <button className="button button-secondary slider-arrow" type="button" onClick={nextImg}>›</button>
              </div>
            )}
          </div>
          <div className="modal-details">
            <span className="eyebrow">Preview</span>
            <h2>{project.title}</h2>
            <p className="project-subtitle">{project.subtitle}</p>
            <p>{project.details}</p>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="modal-nav">
              <button className="button button-secondary" type="button" onClick={onPrev}>
                Previous
              </button>
              <button className="button button-secondary" type="button" onClick={onNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
