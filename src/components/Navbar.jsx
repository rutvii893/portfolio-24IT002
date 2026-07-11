function Navbar() {
  const links = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="top-nav" aria-label="Main navigation">
      <a className="brand-mark" href="#top">
        RA
      </a>
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;