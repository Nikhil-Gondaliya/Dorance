import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../../data';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { MessageCircleMore, Phone } from 'lucide-react';
import { Whatsapp } from '../../Components/Whatsapps';

export const ProductsPage = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
      color: '#ffffff',
      padding: 'clamp(4rem, 8vw, 7rem) 1.5rem 8rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    headerTitle: {
      fontSize: 'clamp(2.3rem, 6.5vw, 4.5rem)',
      fontWeight: '600',
      margin: '1.2rem 0 1rem 0',
      letterSpacing: '-0.02em',
      lineHeight: '1.1'
    },
    headerSubtitle: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
      maxWidth: '820px',
      margin: '0 auto',
      opacity: 0.9,
      lineHeight: 1.5
    },
    grid: {
      maxWidth: '1400px',
      margin: '-5rem auto 4rem',
      padding: '0 1.5rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2.2rem)'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      color: 'inherit',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    },
    cardHover: {
      transform: 'translateY(-12px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
    },
    image: {
      width: '100%',
      height: 'clamp(220px, 28vw, 280px)',
      objectFit: 'cover',
      backgroundColor: '#e2e8f0',
      flexShrink: 0
    },
    content: {
      padding: 'clamp(1.4rem, 2vw, 1.75rem)',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    },
    category: {
      color: '#e85d04',
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: '0.8rem'
    },
    title: {
      fontSize: 'clamp(1.4rem, 2.5vw, 1.65rem)',
      fontWeight: '700',
      color: '#0f172a',
      margin: '0 0 1rem 0',
      lineHeight: '1.25'
    },
    description: {
      fontSize: 'clamp(0.92rem, 1.8vw, 1rem)',
      color: '#64748b',
      lineHeight: 1.6,
      margin: 0,
      flexGrow: 1
    },

    // CTA section
    ctaWrapper: {
      textAlign: 'center',
      padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
      backgroundColor: '#f1f5f9'
    },
    ctaTitle: {
      fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)',
      color: '#0f172a',
      marginBottom: '1.2rem'
    },
    ctaText: {
      fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
      color: '#475569',
      maxWidth: '680px',
      margin: '0 auto 2rem',
      lineHeight: 1.5
    },
    ctaButtonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 'clamp(1rem, 2.5vw, 1.5rem)',
      flexWrap: 'wrap'
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      padding: 'clamp(0.9rem, 2vw, 1.1rem) clamp(1.8rem, 3vw, 2.4rem)',
      backgroundColor: '#e85d04',
      color: 'white',
      fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
      fontWeight: '600',
      borderRadius: '50px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      justifyContent: "center"
    },
    whatsappButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      padding: 'clamp(0.9rem, 2vw, 1.1rem) clamp(1.8rem, 3vw, 2.4rem)',
      backgroundColor: '#25D366', // Official WhatsApp green
      color: 'white',
      fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
      fontWeight: '600',
      borderRadius: '50px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      justifyContent: "center"
    }
  };

  return (
    <div style={styles.container}>
      <Header />

      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Our Products</h1>
        <p style={styles.headerSubtitle}>
          Premium stainless steel fabrication and hardware solutions for architecture,
          commercial kitchens, industry and water pumping applications
        </p>
      </header>

      <section style={styles.grid}>
        {productsData.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={styles.card}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={styles.image}
              loading="lazy"
            />
            <div style={styles.content}>
              <div style={styles.category}>{product.category}</div>
              <h3 style={styles.title}>{product.title}</h3>
              <p style={styles.description}>{product.description}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA strip with Call + WhatsApp */}
      <div style={styles.ctaWrapper}>
        <h2 style={styles.ctaTitle}>
          Need More Information?
        </h2>
        <p style={styles.ctaText}>
          Bring your vision to life with bespoke work. We're ready when you are!
        </p>

        <div style={styles.ctaButtonsContainer}>
          <a
            href="tel:+918217524980"
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(232,93,4,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Phone /> +91 82175 24980
          </a>

          <a
            href="https://wa.me/+918217524980"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(37,213,102,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <MessageCircleMore />   Chat on WhatsApp
          </a>
        </div>
      </div>

      <Whatsapp />

      <Footer />
    </div>
  );
};