import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Projects', 'Contact'];

  return (
    <header
      style={{
        position: 'fixed',
        top: '20px',
        left: '0',
        right: '0',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none', // Allow clicking through the invisible layer
      }}
    >
      <nav
        style={{
          pointerEvents: 'auto', // Re-enable clicking on the navbar itself
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0,0,0,0.02)',
          border: '1px solid rgba(0, 0, 0, 0.03)',
          borderRadius: '999px',
          padding: '8px 8px 8px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: ' clamp(1rem, 3vw, 2.5rem)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <a href="#" style={{
          textDecoration: 'none',
          color: '#111827',
          fontWeight: '700',
          fontSize: '1rem',
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          Sai.Portfolio
        </a>

        {/* Links */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '1.5rem',
          margin: 0,
          padding: 0,
        }} className="hidden-mobile">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{
                  textDecoration: 'none',
                  color: '#4b5563',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  transition: 'color 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#111827'}
                onMouseOut={(e) => e.currentTarget.style.color = '#4b5563'}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me / Login analogue */}
        <a
          href="#contact"
          style={{
            textDecoration: 'none',
            color: '#111827',
            fontWeight: '600',
            fontSize: '0.85rem',
            padding: '8px 16px',
            borderRadius: '999px',
            backgroundColor: 'transparent',
            transition: 'background 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          Hire me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
