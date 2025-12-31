
import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../../data';

export const ProductsPage = () => {
  const filteredProducts = productsData;

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      backgroundColor: '#2c3e5f',
      color: '#ffffff',
      padding: '2rem 2rem 4rem',
      textAlign: 'center'
    },
    headerTitle: {
      fontSize: '3.5rem',
      fontWeight: '300',
      margin: '0 0 1rem 0'
    },
    headerSubtitle: {
      fontSize: '1.25rem',
      color: '#cbd5e1',
      maxWidth: '700px',
      margin: '0 auto'
    },
    productsGrid: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '4rem 2rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2.5rem'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit'
    },
    cardImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      backgroundColor: '#e2e8f0'
    },
    cardContent: {
      padding: '1.5rem'
    },
    cardCategory: {
      color: '#FF6B47',
      fontSize: '0.875rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '0.75rem'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#2c3e5f',
      margin: '0 0 1rem 0'
    },
    cardDescription: {
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: '1.6',
      margin: 0
    },
    backLink: {
      display: 'inline-block',
      padding: '1rem 1rem',
      margin: '1rem',
      backgroundColor: '#2c3e5f',
      color: '#ffffff',
      textDecoration: 'none',
      borderRadius: '50px',
      fontWeight: '600',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>← Back to Home</Link>

      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Our Products</h1>
        <p style={styles.headerSubtitle}>
          Explore my portfolio of successful marketing campaigns and brand transformations
        </p>
      </header>

      <section style={styles.productsGrid}>
        {filteredProducts.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            }}
          >
            <img src={product.image} alt={product.title} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <div style={styles.cardCategory}>{product.category}</div>
              <h3 style={styles.cardTitle}>{product.title}</h3>
              <p style={styles.cardDescription}>{product.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
