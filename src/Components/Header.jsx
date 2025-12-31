import { useNavigate } from "react-router-dom";

export const Header = ({ isMobile, mobileMenuOpen, setMobileMenuOpen }) => {
  const styles = {
    // Navigation Styles
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      zIndex: 1000,
      padding: isMobile ? '1rem 0' : '0.8rem 0'
    },
    navContainer: {
      maxWidth: '1400px',
      padding: isMobile ? '0 1.5rem' : '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: '600',
      color: '#FF6B47',
      margin: 0
    },
    navMenu: {
      display: isMobile ? 'none' : 'flex',
      gap: '3rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    mobileMenuButton: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#1e293b'
    },
    mobileMenu: {
      display: mobileMenuOpen && isMobile ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem 0',
      borderTop: '1px solid #e2e8f0'
    },
    navLink: {
      color: '#1e293b',
      textDecoration: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      fontFamily: 'inherit',
      padding: '0.5rem 0',
      borderBottom: '2px solid transparent',
      transition: 'all 0.3s ease'
    },
    navLinkActive: {
      borderBottom: '2px solid #1e293b'
    },

    // Hero Section Styles
    heroSection: {
      marginTop: '80px',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      minHeight: isMobile ? 'auto' : '600px'
    },
    heroLeft: {
      backgroundColor: '#2c3e5f',
      padding: isMobile ? '3rem 1.5rem' : '6rem 4rem',
      display: 'flex',
      alignItems: 'center'
    },
    heroContent: {
      maxWidth: '600px',
      marginLeft: isMobile ? '0' : '4rem'
    },
    heroTitle: {
      fontSize: isMobile ? '2.5rem' : '4.5rem',
      fontWeight: '300',
      color: '#ffffff',
      margin: '0 0 1.5rem 0',
      lineHeight: '1.1',
      letterSpacing: '-0.02em'
    },
    heroSubtitle: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: '#ffffff',
      margin: 0,
      lineHeight: '1.6',
      opacity: '0.95'
    },
    heroRight: {
      backgroundColor: '#F4D03F',
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? '300px' : 'auto'
    },

    // Background Section Styles
    backgroundSection: {
      padding: isMobile ? '4rem 1.5rem' : '8rem 4rem',
      backgroundColor: '#f8f9fa',
      textAlign: 'center'
    },
    sectionLabel: {
      color: '#FF6B47',
      fontSize: '0.875rem',
      fontWeight: '600',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      marginBottom: '2rem'
    },
    backgroundText: {
      maxWidth: '900px',
      margin: '0 auto',
      fontSize: isMobile ? '1.25rem' : '1.75rem',
      color: '#2c3e5f',
      lineHeight: '1.6',
      fontWeight: '400'
    },

    // Services Section Styles
    servicesSection: {
      padding: isMobile ? '4rem 1.5rem' : '8rem 4rem',
      backgroundColor: '#ffffff'
    },
    servicesTitle: {
      fontSize: isMobile ? '2rem' : '3.5rem',
      color: '#2c3e5f',
      fontWeight: '400',
      textAlign: 'center',
      margin: '1rem 0 3rem 0'
    },
    servicesGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '3rem' : '5rem 8rem'
    },
    serviceItem: {
      textAlign: 'center'
    },
    serviceTitle: {
      fontSize: isMobile ? '1.5rem' : '1.75rem',
      color: '#2c3e5f',
      fontWeight: '600',
      marginBottom: '1.25rem'
    },
    serviceDescription: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: '#475569',
      lineHeight: '1.7'
    },

    // Projects Section Styles
    projectsSection: {
      backgroundColor: '#2c3e5f',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      minHeight: isMobile ? 'auto' : '600px'
    },
    projectsLeft: {
      padding: isMobile ? '3rem 1.5rem' : '6rem 4rem',
      display: 'flex',
      alignItems: 'center'
    },
    projectsContent: {
      maxWidth: '550px',
      marginLeft: isMobile ? '0' : '4rem'
    },
    projectsLabelWhite: {
      color: '#FF6B47',
      fontSize: '0.875rem',
      fontWeight: '600',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      marginBottom: '1.5rem'
    },
    projectsTitle: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: '400',
      color: '#ffffff',
      margin: '0 0 2rem 0',
      lineHeight: '1.2'
    },
    projectsText: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: '#cbd5e1',
      lineHeight: '1.7',
      marginBottom: '2.5rem'
    },
    projectsButton: {
      backgroundColor: '#FF6B47',
      color: '#ffffff',
      padding: '1rem 2.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto'
    },
    projectsRight: {
      padding: isMobile ? '2rem 1.5rem' : '4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      maxWidth: '500px',
      width: '100%'
    },
    projectImage: {
      width: '100%',
      aspectRatio: '1',
      borderRadius: '8px',
      objectFit: 'cover'
    },

    // Testimonial Section Styles
    testimonialSection: {
      padding: isMobile ? '4rem 1.5rem' : '8rem 4rem',
      backgroundColor: '#f8f9fa'
    },
    testimonialContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '2fr 3fr',
      gap: isMobile ? '2rem' : '6rem',
      alignItems: 'center'
    },
    testimonialImage: {
      width: '100%',
      aspectRatio: '1',
      borderRadius: '8px',
      objectFit: 'cover',
      backgroundColor: '#cbd5e1'
    },
    testimonialQuote: {
      fontSize: isMobile ? '1.125rem' : '1.5rem',
      color: '#2c3e5f',
      lineHeight: '1.7',
      marginBottom: '2rem',
      fontStyle: 'italic'
    },
    testimonialAuthor: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: '#2c3e5f',
      fontWeight: '600',
      margin: '0.5rem 0'
    },
    testimonialRole: {
      fontSize: isMobile ? '0.875rem' : '1rem',
      color: '#64748b',
      fontStyle: 'italic',
      margin: '0.25rem 0'
    },

    // Work Approach Section Styles
    approachSection: {
      padding: isMobile ? '4rem 1.5rem' : '8rem 4rem',
      backgroundColor: '#F4D03F',
      textAlign: 'center'
    },
    approachTitle: {
      fontSize: isMobile ? '2rem' : '3.5rem',
      color: '#ffffff',
      fontWeight: '400',
      maxWidth: '900px',
      margin: '2rem auto 3rem',
      lineHeight: '1.3'
    },
    approachButton: {
      backgroundColor: '#2c3e5f',
      color: '#ffffff',
      padding: '1rem 2.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '400px' : 'none'
    },

    // Footer Styles
    footer: {
      backgroundColor: '#2c3e5f',
      padding: isMobile ? '3rem 1.5rem' : '5rem 4rem',
      color: '#ffffff'
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '3rem'
    },
    footerTitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    footerText: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: '#cbd5e1',
      lineHeight: '1.6'
    },
    footerRight: {
      textAlign: isMobile ? 'left' : 'right'
    },
    footerLink: {
      color: '#cbd5e1',
      textDecoration: 'none',
      fontSize: isMobile ? '1rem' : '1.125rem',
      display: 'block',
      margin: '0.75rem 0',
      transition: 'color 0.3s ease'
    }
  };

  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };


  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <img
          src="/image/logo.png"
          alt="Dorence Logo"
          style={{ cursor: "pointer", background: "red", }}
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <ul style={styles.navMenu}>
          <li>
            <button
              onClick={() => navigate("/")}
              style={{ ...styles.navLink, ...styles.navLinkActive }}
              onMouseEnter={(e) => e.target.style.borderBottom = '2px solid #1e293b'}
              onMouseLeave={(e) => e.target.style.borderBottom = '2px solid #1e293b'}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/products")}
              style={styles.navLink}
              onMouseEnter={(e) => e.target.style.borderBottom = '2px solid #1e293b'}
              onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
            >
              Products
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/contact")}
              style={styles.navLink}
              onMouseEnter={(e) => e.target.style.borderBottom = '2px solid #1e293b'}
              onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          style={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        <button
          onClick={() => scrollToSection('home')}
          style={{ ...styles.navLink, padding: '0.75rem 1.5rem', textAlign: 'left' }}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('products')}
          style={{ ...styles.navLink, padding: '0.75rem 1.5rem', textAlign: 'left' }}
        >
          Products
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          style={{ ...styles.navLink, padding: '0.75rem 1.5rem', textAlign: 'left' }}
        >
          Contact
        </button>
      </div>
    </nav>
  )
}