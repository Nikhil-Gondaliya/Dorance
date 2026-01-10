/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { Header } from '../../Components/Header';
import { useNavigate } from 'react-router-dom';
import { ImageCard } from '../../Components/ImageCard';
import { Footer } from '../../Components/Footer';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const mainImges = [
  "/image/doorClose.jpg",
  "/image/liner.png",
  "/image/gs.png",
  "/image/mainPump.png",
]

export function HomePage() {
  const [mobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mainImges.length);
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);


  const navigate = useNavigate()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


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
      padding: isMobile ? '1rem 0' : '1.5rem 0'
    },
    navContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '0 1.5rem' : '0 3rem',
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
    navLinks: {
      color: 'white',
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
      padding: isMobile ? '3rem 1.5rem' : '5rem 4rem',
      display: 'flex',
      alignItems: 'center'
    },
    heroContent: {
      maxWidth: '600px',
      marginLeft: isMobile ? '0' : '1.2rem',
      display: "flex",
      flexDirection: "column",
      gap: "10px"
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
      fontSize: isMobile ? '1rem' : '1.5rem',
      color: '#ffffff',
      margin: 0,
      lineHeight: '1.6',
      fontWeight: '300',
      opacity: '0.95',
      textAlign: "center"
    },
    heroRight: {
      backgroundColor: '#ffffffff',
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? '300px' : 'auto',
      paddingTop: "20%"
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

    // Work Approach Section Styles
    approachSection: {
      padding: isMobile ? '4rem 1.5rem' : '8rem 4rem',
      backgroundColor: '#ffffffff',
      textAlign: 'center'
    },
    approachTitle: {
      fontSize: isMobile ? '2rem' : '3.5rem',
      color: '#000000ff',
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
      textAlign: isMobile ? "left" : "right",
    },
    iconRow: {
      display: "flex",
      justifyContent: isMobile ? "flex-start" : "flex-end",
      gap: "1.25rem",
      marginTop: "1rem",
    },
    iconLink: {
      color: "#cbd5e1",
      fontSize: "1.25rem",
    },
  };

  const downloadDoorCloserPdf = () => {
    const link = document.createElement("a");
    link.href = "/doorCloserPdf.pdf"; // file path inside public
    link.download = "doorCloserPdf.pdf"; // name shown in download
    link.click();
  };

  const downloadGasStovePdf = () => {
    const link = document.createElement("a");
    link.href = "/gasStovePdf.pdf"; // file path inside public
    link.download = "gasStovePdf.pdf"; // name shown in download
    link.click();
  };

  const downloadLinePdf = () => {
    const link = document.createElement("a");
    link.href = "/linePdf.pdf"; // file path inside public
    link.download = "linePdf.pdf"; // name shown in download
    link.click();
  };

  const downloadPumpPdf = () => {
    const link = document.createElement("a");
    link.href = "/pumpPdf.pdf"; // file path inside public
    link.download = "pumpPdf.pdf"; // name shown in download
    link.click();
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: "sans-serif" }}>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section id="home" style={styles.heroSection}>
        <div style={styles.heroLeft}>
          <div style={styles.heroContent}>
            <img src='/image/smeLogo.jpg' alt="SME" width="500px" />

            <p style={styles.heroSubtitle}>
              Where Quality Meets Global Trade.
            </p>
          </div>
        </div>

        <div style={styles.heroRight}>
          <Carousel responsive={responsive}
            swipeable={false}
            draggable={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            arrows={false}
          >
            {mainImges.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="SMEOCEANWAYS Product"
                style={{
                  width: `${100}%`,
                }}
              />
            ))}
          </Carousel>;
        </div>


      </section>

      {/* Background Section */}
      <section style={styles.backgroundSection}>
        <p style={styles.sectionLabel}>ABOUT SMEOCEANWAYS</p>
        <p style={styles.backgroundText}>
          SME OCEAN WAYS is a reliable manufacturer and supplier of premium door closer, kitchen equipment, submersible pumps, and hardware products. We focus on delivering durable, high-performance solutions designed for commercial and industrial use. With quality craftsmanship and customer-first service, we provide products that ensure efficiency, safety, and long-term value for every project.
        </p>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <p style={{ ...styles.sectionLabel, textAlign: 'center' }}>OUR PRODUCTS</p>
        <h3 style={styles.servicesTitle}>Explore Our Range</h3>

        <div style={styles.servicesGrid}>
          <div style={styles.serviceItem}>
            <h4 style={styles.serviceTitle}>Commercial Gas Stoves</h4>
            <p style={styles.serviceDescription}>
              High-efficiency gas stoves and burners designed for hotels, restaurants, and catering services. Available in multiple sizes and configurations for fast and powerful cooking.
            </p>
          </div>

          <div style={styles.serviceItem}>
            <h4 style={styles.serviceTitle}>Kitchen Equipment</h4>
            <p style={styles.serviceDescription}>
              A complete range of stainless-steel kitchen solutions including dosa bhatti, shawarma machines, idli steamers, and food-service workstations with superior durability and hygiene.
            </p>
          </div>

          <div style={styles.serviceItem}>
            <h4 style={styles.serviceTitle}>Submersible Pumps & Motors</h4>
            <p style={styles.serviceDescription}>
              Reliable pump systems engineered for heavy-duty performance in domestic, agricultural, and industrial applications. Built to deliver efficient water flow with long-lasting strength.
            </p>
          </div>

          <div style={styles.serviceItem}>
            <h4 style={styles.serviceTitle}>Door Hardware & Closers</h4>
            <p style={styles.serviceDescription}>
              Smooth and secure door closer mechanisms and essential hardware that improve safety and operational convenience for commercial and residential use.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="products" style={styles.projectsSection}>
        <div style={styles.projectsLeft}>
          <div style={styles.projectsContent}>
            <p style={styles.projectsLabelWhite}>OUR CATALOGUE</p>
            <h3 style={styles.projectsTitle}>
              Browse our complete<br />product range
            </h3>
            <p style={styles.projectsText}>
              Discover our comprehensive collection of doors and windows. From classic designs to contemporary styles, we offer solutions for every architectural need. Download our catalogue to explore detailed specifications, dimensions, and finishes.
            </p>
            <button
              onClick={() => navigate("/products")}
              style={styles.navLinks}
              onMouseEnter={(e) => e.target.style.borderBottom = '2px solid white'}
              onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
            >
              View Products
            </button>
          </div>
        </div>
        <div style={styles.projectsRight}>
          <div style={styles.projectsGrid}>
            <ImageCard styles={{ ...styles.projectImage, backgroundColor: '#ffffffff', display: "flex", justifyContent: "center", alignItems: "center" }} imgUrl="/image/dooforpfd.jpg" onClick={downloadDoorCloserPdf} buttonLabel={"Door Closer"} />
            <ImageCard styles={{ ...styles.projectImage, backgroundColor: '#ffffffff', display: "flex", justifyContent: "center", alignItems: "center" }} imgUrl="/image/linerforpdf.png" onClick={downloadLinePdf} buttonLabel={"Liner"} />
            <ImageCard styles={{ ...styles.projectImage, backgroundColor: '#ffffffff', display: "flex", justifyContent: "center", alignItems: "center" }} imgUrl="/image/gs.png" onClick={downloadGasStovePdf} buttonLabel={"Gas Stove"} />
            <ImageCard styles={{ ...styles.projectImage, backgroundColor: '#ffffffff', display: "flex", justifyContent: "center", alignItems: "center" }} imgUrl="/image/pumpforpdf.png" onClick={downloadPumpPdf} buttonLabel={"Submersible Pump"} />
          </div>
        </div>
      </section>

      {/* Work Approach Section */}
      <section style={styles.approachSection}>
        <p style={{ ...styles.sectionLabel, color: '#2c3e5f' }}>WHY CHOOSE SMEOCEANWAYS</p>
        <h3 style={styles.approachTitle}>
          Quality craftsmanship meets innovative design. We don't just sell products, we deliver lasting solutions.
        </h3>
        <button
          style={styles.approachButton}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1e293b'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2c3e5f'}
          onClick={() => navigate("/contact")}
        >
          Get in touch
        </button>
      </section>

      {/* Footer */}
      <Footer isMobile={isMobile} />
    </div>
  );
}