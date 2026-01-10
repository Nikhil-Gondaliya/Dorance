// src/components/Footer.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

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
      gap: isMobile ? '2.5rem' : '4rem',
    },
    brandArea: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? '1.5rem' : '2.5rem',
      marginBottom: isMobile ? '2rem' : '2.5rem',
    },
    logoWrapper: {
      background: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "6px",
      borderRadius: "6px",
      width: isMobile ? '140px' : '180px',
      height: isMobile ? '70px' : '90px',
    },
    logo: {
      maxHeight: '100%',
      maxWidth: '100%',
      objectFit: 'contain',
    },
    footerTitle: {
      fontSize: isMobile ? '1.6rem' : '2rem',
      fontWeight: '600',
      marginBottom: '1.2rem',
    },
    footerText: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: '#cbd5e1',
      lineHeight: '1.65',
      maxWidth: isMobile ? '100%' : '480px',
    },
    footerRight: {
      textAlign: isMobile ? 'left' : 'right',
    },
    iconRow: {
      display: 'flex',
      justifyContent: isMobile ? 'flex-start' : 'flex-end',
      gap: '1.5rem',
      marginTop: '1.8rem',
    },
    iconLink: {
      color: '#cbd5e1',
      fontSize: isMobile ? '1.7rem' : '1.9rem',
      transition: 'color 0.3s ease, transform 0.2s ease',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#cbd5e1',
      textDecoration: 'none',
      fontSize: isMobile ? '1rem' : '1.1rem',
      marginBottom: '1rem',
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
            <div style={styles.logoWrapper}>
              <img
                src="/image/nslogo.jpg"
                alt="NS Logo"
                style={styles.logo}
              />
            </div>

            {/* SME Oceanways Logo */}
            <div style={styles.logoWrapper}>
              <img
                src="/image/logos.png"
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
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FF6B47';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#cbd5e1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/jaimin-ramani-856006395/"
              target="_blank"
              rel="noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FF6B47';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#cbd5e1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com/people/Sme-Oceanways/"
              target="_blank"
              rel="noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FF6B47';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#cbd5e1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};