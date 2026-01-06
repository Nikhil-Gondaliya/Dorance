import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../../data';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';

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
      padding: '5rem 2rem 6rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    headerTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: '600',
      margin: '0 0 1rem 0',
      letterSpacing: '-0.02em'
    },
    headerSubtitle: {
      fontSize: '1.25rem',
      maxWidth: '720px',
      margin: '0 auto',
      opacity: 0.9,
      lineHeight: 1.6
    },
    grid: {
      maxWidth: '1400px',
      margin: '-4rem auto 4rem',
      padding: '0 1.5rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      color: 'inherit',
      position: 'relative'
    },
    cardHover: {
      transform: 'translateY(-12px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
    },
    image: {
      width: '100%',
      height: '260px',
      objectFit: 'cover',
      backgroundColor: '#e2e8f0'
    },
    content: {
      padding: '1.75rem'
    },
    category: {
      color: '#e85d04',
      fontSize: '0.9rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: '0.75rem'
    },
    title: {
      fontSize: '1.6rem',
      fontWeight: '700',
      color: '#0f172a',
      margin: '0 0 1rem 0'
    },
    description: {
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: 1.6,
      margin: 0
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

      {/* Optional CTA strip */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        backgroundColor: '#f1f5f9'
      }}>
        <h2 style={{ fontSize: '2.2rem', color: '#0f172a', marginBottom: '1.5rem' }}>
          Need More Information?
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Bring your vision to life with bespoke work. We're ready when you are!
        </p>
        <a
          href="tel:+918217524980"
          style={{
            display: 'inline-block',
            padding: '1rem 2.2rem',
            backgroundColor: '#e85d04',
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '50px',
            textDecoration: 'none'
          }}
        >
          Call: +91 82175 24980
        </a>
      </div>

      <Footer />
    </div>
  );
};