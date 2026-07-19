import { NavLink } from 'react-router-dom';

function Navbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="top-nav" aria-label="Main navigation">
      <NavLink className="brand-mark" to="/">
        RA
      </NavLink>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink key={link.label} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;