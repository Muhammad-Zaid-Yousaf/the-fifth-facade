import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <a href="/#" className={`brand${open ? ' brand--light' : ''}`}>The Fifth Facade — Where Form Meets Vision</a>

        <button
          className={`nav-hamburger${open ? ' nav-hamburger--open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-links">
          <a href="/#" className="nav-link">Home</a>
          <a href="/#projects" className="nav-link">Projects</a>
          <a href="/#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-label">Menu</div>
          <nav className="mobile-menu-links">
            <a href="/#" className="mobile-link" onClick={close}>Home</a>
            <a href="/#projects" className="mobile-link" onClick={close}>Projects</a>
            <a href="/#contact" className="mobile-link" onClick={close}>Contact</a>
          </nav>
          <div className="mobile-menu-footer">The Fifth Facade © 2025</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
