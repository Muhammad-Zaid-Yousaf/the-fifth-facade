import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

function ProjectsPage() {
  const [selectedSlug, setSelectedSlug] = useState(null);
  const selectedProject = useMemo(
    () => projects.find((item) => item.slug === selectedSlug),
    [selectedSlug],
  );

  const currentIndex = selectedProject ? projects.findIndex((project) => project.slug === selectedProject.slug) : 0;

  const openPreview = (slug) => setSelectedSlug(slug);
  const closePreview = () => setSelectedSlug(null);
  const prevProject = () => {
    const nextIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedSlug(projects[nextIndex].slug);
  };
  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedSlug(projects[nextIndex].slug);
  };

  return (
    <div className="app-shell">
      <Navbar />
      <section className="section-intro" id="projects">
        <div className="section-heading">
          <span>Projects</span>
          <h2>Browse every project and preview the details.</h2>
        </div>
        <p className="section-copy">
          Explore the body of work with quick previews, then open the detail page for each project to see the full narrative and gallery.
        </p>
      </section>

      <section className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onPreview={openPreview} />
        ))}
      </section>

      <ProjectModal project={selectedProject} onClose={closePreview} onPrev={prevProject} onNext={nextProject} />
    </div>
  );
}

export default ProjectsPage;
