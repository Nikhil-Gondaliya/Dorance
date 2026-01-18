// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // You can fine-tune breakpoint (768px is common mobile/tablet cutoff)
  const isSmallMobile = window.innerWidth < 480; // extra small phones

  const styles = {
    footer: {
      backgroundColor: '#2c3e5f',
      padding: isMobile ? '3.5rem 1.2rem' : '6rem 5rem',
      color: '#ffffff',
      fontFamily: "sans-serif",
    },
    footerContainer: {
      maxWidth: '1300px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '3rem' : '5rem',
    },
    brandArea: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'center' : 'center',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: isMobile ? '1.8rem' : '3rem',
      marginBottom: isMobile ? '2.5rem' : '3rem',
    },
    logoWrapper: {
      background: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: isSmallMobile ? "8px" : "10px",
      borderRadius: "8px",
      width: isSmallMobile ? '120px' : isMobile ? '150px' : '190px',
      height: isSmallMobile ? '60px' : isMobile ? '75px' : '100px',
      flexShrink: 0,
    },
    logoWrapperv2: {
      background: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: isSmallMobile ? "8px" : "0px",
      borderRadius: "8px",
      width: isSmallMobile ? '120px' : isMobile ? '150px' : '210px',
      height: isSmallMobile ? '60px' : isMobile ? '75px' : '120px',
      flexShrink: 0,
    },
    logo: {
      maxHeight: '100%',
      maxWidth: '100%',
      objectFit: 'contain',
    },
    footerTitle: {
      fontSize: isMobile ? '1.8rem' : '2.2rem',
      fontWeight: '700',
      marginBottom: '1.4rem',
      textAlign: isMobile ? 'center' : 'right',
    },
    footerText: {
      fontSize: isMobile ? '0.97rem' : '1.15rem',
      color: '#cbd5e1',
      lineHeight: '1.7',
      maxWidth: isMobile ? '100%' : '520px',
      textAlign: isMobile ? 'center' : 'left',
      margin: isMobile ? '0 auto' : '0',
    },
    footerRight: {
      textAlign: isMobile ? 'center' : 'right',
    },
    iconRow: {
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-end',
      gap: isMobile ? '1.8rem' : '2rem',
      marginTop: '2rem',
    },
    iconLink: {
      color: '#cbd5e1',
      fontSize: isMobile ? '1.9rem' : '2.1rem',
      transition: 'color 0.3s ease, transform 0.25s ease',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'flex-end',
      gap: '14px',
      color: '#cbd5e1',
      textDecoration: 'none',
      fontSize: isMobile ? '1.05rem' : '1.15rem',
      marginBottom: '1.2rem',
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
            <div style={styles.logoWrapperv2}>
              <img
                src="/image/nslogo.jpg"
                alt="NS Logo"
                style={styles.logo}
              />
            </div>

            {/* SME Oceanways Logo */}
            <div style={styles.logoWrapperv2}>
              <img
                src="/image/smeLogo.jpg"
                alt="SME Oceanways Logo"
                style={styles.logo}
              />
            </div>
          </div>

          <p style={styles.footerText}>
            Leading Manufacturer and Supplier of Door Closers, Sleeve & Liners, Restaurants Kitchen Equipments and Submersible Pumps. Quality, durability, and reliability for commercial & industrial needs.
          </p>
        </div>

        {/* Right side - Contact & Social */}
        <div style={styles.footerRight}>
          <h4 style={styles.footerTitle}>Contact Details</h4>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-end'
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
                e.currentTarget.style.transform = 'scale(1.2)';
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
                e.currentTarget.style.transform = 'scale(1.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#cbd5e1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com/people/Sme-Oceanways/61583137959709/"
              target="_blank"
              rel="noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FF6B47';
                e.currentTarget.style.transform = 'scale(1.2)';
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