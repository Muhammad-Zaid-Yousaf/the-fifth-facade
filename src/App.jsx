import { useMemo } from 'react';

const projects = [
  {
    title: 'Healing Hospital',
    subtitle: '250-bed gynecology hospital with biophilic healthcare design',
    description:
      'A nature-infused healing environment that balances functional medical precision with human warmth. Corridors and patient rooms are oriented around natural light and green views to support holistic wellness.',
    highlights: ['Biophilic circulation', 'Operative flow efficiency', 'Sanctuary-like patient experience'],
    image: '/assets/250-beds-gynae-hospital-visualization-1.jpg',
  },
  {
    title: 'Autism Care Complex',
    subtitle: 'Sensory-responsive campus for children with autism',
    description:
      'A profoundly empathetic campus built on ASPECT design principles. The facility minimizes sensory overload, maximizes independence, and uses sustainable mycelium-inspired materials for a carbon-sequestering facade.',
    highlights: ['Acoustic control', 'Predictable transitions', 'Bio-fabrication envelope'],
    image: '/assets/complex-for-autistic-children-visualization-1.png',
  },
  {
    title: 'Quiet Bedroom',
    subtitle: 'Warm minimalism in luxury residential design',
    description:
      'A sanctuary defined by natural wood, ambient lighting, and clean geometry. The bedroom balances sleek modernity with organic comfort for refined domestic wellbeing.',
    highlights: ['Vertical timber panels', 'Integrated ambient lighting', 'Low-profile platform bed'],
    image: '/assets/interior-projects-bedroom-interior-visualization-1.png',
  },
  {
    title: 'Modern Kitchen',
    subtitle: 'Culinary space elevated through light and materiality',
    description:
      'A kitchen visualization that pairs sharp lines with warm tactile textures. The design emphasizes spatial harmony, realistic atmosphere, and smooth digital storytelling.',
    highlights: ['Enscape lighting', 'Textural contrast', 'Optimized functional layout'],
    image: '/assets/interior-projects-kitchen-interior-visualization-1.png',
  },
  {
    title: 'Landscape Master Plan',
    subtitle: 'Rhythmic outdoor living with geometric pavilion sequence',
    description:
      'A 5-kanal landscape plan with seven hexagonal pavilions and a sculpted pedestrian spine. The design blends bold forms and fluid green spaces for an elevated site experience.',
    highlights: ['Geometric pavilions', 'Fluid circulation', 'Expansive outdoor rhythm'],
    image: '/assets/landscape-project-master-plan.jpg',
  },
];

function App() {
  const age = useMemo(() => new Date().getFullYear() - 2024, []);

  return (
    <div className="app-shell">
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
                <strong>{age}</strong>
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
            <article key={project.title} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>
                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
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
      </main>
    </div>
  );
}

export default App;
