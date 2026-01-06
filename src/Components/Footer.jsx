// src/components/Footer.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

// If you're using local files (recommended):
// import nsLogo from '@/assets/ns-logo.png';
// import smeOceanwaysLogo from '@/assets/sme-oceanways-logo.png';

export const Footer = ({ isMobile = false }) => {
  const styles = {
    footer: {
      backgroundColor: '#2c3e5f',
      padding: isMobile ? '3rem 1.5rem' : '5rem 4rem',
      color: '#ffffff',
      fontFamily: "sans-serif",
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '3rem',
    },
    brandArea: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? '1.5rem' : '2.5rem',
      marginBottom: isMobile ? '1.5rem' : '2rem',
    },
    logo: {
      height: isMobile ? '60px' : '80px',
      width: 'auto',
      objectFit: 'contain',
    },
    footerTitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    footerText: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: '#cbd5e1',
      lineHeight: '1.6',
    },
    footerRight: {
      textAlign: isMobile ? 'left' : 'right',
    },
    iconRow: {
      display: 'flex',
      justifyContent: isMobile ? 'flex-start' : 'flex-end',
      gap: '1.25rem',
      marginTop: '1.5rem',
    },
    iconLink: {
      color: '#cbd5e1',
      fontSize: '1.5rem',
      transition: 'color 0.3s ease',
    },
    contactItem: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      color: '#cbd5e1',
      textDecoration: 'none',
      marginBottom: '0.75rem',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <footer id="contact" style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Left side - Brand Logos + Description */}
        <div>
          <div style={styles.brandArea}>
            {/* NS Logo */}
            <div style={{ background: "white", display: "flex", justifyContent: "center", alignItems: "center", padding: "4px" }}>
              <img
                src="/image/nslogo.jpg"
                // Replace with real path when ready:
                // src={nsLogo}
                alt="NS Logo"
                style={styles.logo}
              />
            </div>

            {/* SME Oceanways Logo */}
            <div style={{ background: "white", display: "flex", justifyContent: "center", alignItems: "center", padding: "4px" }}>
              <img
                src="/image/logos.png"
                // Replace with real path when ready:
                // src={smeOceanwaysLogo}
                alt="SME Oceanways Logo"
                style={styles.logo}
              />
            </div>
          </div>

          <p style={styles.footerText}>
            Leading manufacturer and supplier of premium kitchen equipment, submersible pumps,
            door closers & hardware products. Quality, durability, and reliability for commercial & industrial needs.
          </p>
        </div>

        {/* Right side - Contact & Social */}
        <div style={styles.footerRight}>
          <h4 style={styles.footerTitle}>Contact Details</h4>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'flex-start' : 'flex-end'
          }}>
            <a
              href="tel:+918217524980"
              style={styles.contactItem}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B47')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
            >
              <FaPhoneAlt /> +91 82175 24980
            </a>

            <a
              href="mailto:smeoceanways@gmail.com"
              style={styles.contactItem}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B47')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
            >
              <FaEnvelope /> smeoceanways@gmail.com
            </a>
          </div>

          <div style={styles.iconRow}>
            <a
              href="https://www.instagram.com/smeoceanways"
              target="_blank"
              rel="noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B47')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/jaimin-ramani-856006395/"
              target="_blank"
              rel="noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B47')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com/people/Sme-Oceanways/"
              target="_blank"
              rel="noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B47')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};