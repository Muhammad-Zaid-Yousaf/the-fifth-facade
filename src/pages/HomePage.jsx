import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import ContactForm from '../components/ContactForm';

function HomePage() {
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
      <header className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Architectural Portfolio</span>
          <h1>Elegant design with bold form, warm detail, and fast digital presence.</h1>
          <p>
            Transforming architectural storytelling into a smooth, responsive portfolio. Explore healthcare, education, interiors, and landscape work created for immersive living and refined user experience.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">View Projects</a>
            <a href="#contact" className="button button-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-card">
            <span className="hero-label">Featured concept</span>
            <h2>Human-centered healing environments</h2>
            <p>
              Design that supports physical efficiency and emotional comfort, using nature-inspired materials and intuitive space planning for lasting impact.
            </p>
            <div className="hero-stats">
              <div>
                <strong>5</strong>
                <span>Project categories</span>
              </div>
              <div>
                <strong>120+</strong>
                <span>Design visuals</span>
              </div>
              <div>
                <strong>{new Date().getFullYear() - 2024}</strong>
                <span>Months of active work</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section-intro" id="projects">
          <div className="section-heading">
            <span>Selected Work</span>
            <h2>Responsive architecture and interior narratives</h2>
          </div>
          <p className="section-copy">
            Each project blends functional clarity with expressive visuals. The portfolio is built to feel fluid on mobile, fast to load, and polished across every screen.
          </p>
        </section>

        <section className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onPreview={openPreview} />
          ))}
        </section>

        <section className="about-section">
          <div>
            <span className="eyebrow">Design Philosophy</span>
            <h2>Architecture rooted in empathy, material intelligence, and clarity.</h2>
            <p>
              From medical facilities to immersive residential spaces, the work prioritizes human comfort, sustainable detail, and cinematic clarity. Every concept is designed to feel effortless and memorable.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <strong>Biophilic detail</strong>
              <p>Creating calm through natural light, texture, and thoughtful spatial sequencing.</p>
            </div>
            <div className="highlight-card">
              <strong>Sensory intelligence</strong>
              <p>Designing transitions that feel predictable, comfortable, and beautifully composed.</p>
            </div>
            <div className="highlight-card">
              <strong>High-performance visuals</strong>
              <p>Fast loading layouts with polished typography and responsive interactions.</p>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div>
            <h2>Ready to turn your next space into a standout experience?</h2>
            <p>Let’s connect and create a portfolio-ready architectural concept that feels elegant, intuitive, and highly refined.</p>
          </div>
          <a href="mailto:hello@example.com" className="button button-primary">Email Me</a>
        </section>

        <section className="contact-section" id="contact-form">
          <div className="section-heading">
            <span>Contact</span>
            <h2>Start your next project with a detailed brief.</h2>
          </div>
          <ContactForm />
        </section>
      </main>

      <ProjectModal project={selectedProject} onClose={closePreview} onPrev={prevProject} onNext={nextProject} />
    </div>
  );
}

export default HomePage;
