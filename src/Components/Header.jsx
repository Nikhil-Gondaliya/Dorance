import { useState, useEffect } from 'react';
import { Mail, Phone, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === '/' ? 'home' : path.split('/')[1]?.toLowerCase() || 'home');
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about-us', label: 'About Us', path: '/about-us' },
    { id: 'products', label: 'Products', path: '/products' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path, id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Left - Logo */}
          <div className="logo-container">
            <img
              src="/image/logos.png"
              alt="SME Oceanways Logo"
              className="logo-image"
            />
          </div>

          {/* Center - Navigation (desktop) */}
          <nav className="main-nav desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.path, link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right - Contact (desktop) */}
          <div className="contact-info desktop-contact">
            <a href="tel:+918217524980" className="contact-link">
              <Phone size={16} />
              <span>+91 82175 24980</span>
            </a>
            <a href="mailto:smeoceanways@gmail.com" className="contact-link">
              <Mail size={16} />
              <span>smeoceanways@gmail.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`mobile-nav-item ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.path, link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mobile-contact">
            <a href="tel:+918217524980" className="mobile-contact-link">
              <Phone size={20} /> +91 82175 24980
            </a>
            <a href="mailto:smeoceanways@gmail.com" className="mobile-contact-link">
              <Mail size={20} /> smeoceanways@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};