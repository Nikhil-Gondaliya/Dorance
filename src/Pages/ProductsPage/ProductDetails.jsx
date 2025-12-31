import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getAllProducts } from "../../db/db";

/* =======================
   PRODUCTS DATA (fallback)
======================= */
export const products = [
  {
    id: 1,
    title: "Door Closers",
    category: "Architectural Hardware",
    shortDescription:
      "High-quality compact, scissor arm, track arm and heavy-duty door closers",
    description:
      "SME Oceanways offers a wide range of premium door closers suitable for residential and commercial applications.",
    image: "/images/door-closer.jpg",
    year: 2024,
    client: "SME Oceanways",
    variants: [
      {
        id: "dc-100",
        name: "DC-100 Compact Door Closer",
        image: "/images/door-closer-1.jpg",
        description: "Ideal for residential and light commercial doors",
      },
      {
        id: "dc-200",
        name: "DC-200 Heavy Duty Door Closer",
        image: "/images/door-closer-2.jpg",
        description: "Designed for heavy doors and high traffic areas",
      },
      {
        id: "dc-300",
        name: "DC-300 Floor Spring",
        image: "/images/door-closer-3.jpg",
        description: "Concealed floor spring for smooth door operation",
      },
    ],
  },
  {
    id: 2,
    title: "Glass Fittings",
    category: "Architectural Hardware",
    shortDescription: "Premium glass fittings for commercial buildings",
    description: "Durable and modern glass fitting solutions.",
    image: "/images/glass-fitting.jpg",
    year: 2024,
    client: "SME Oceanways",
  },
  {
    id: 3,
    title: "Floor Springs",
    category: "Architectural Hardware",
    shortDescription: "Heavy-duty floor springs for smooth door movement",
    description: "Engineered for performance and durability.",
    image: "/images/floor-spring.jpg",
    year: 2023,
    client: "SME Oceanways",
  },
];

/* =======================
   PRODUCT DETAILS
======================= */
export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const stored = await getAllProducts();
      if (stored && stored.length) {
        setDbProducts(stored);
      }
    };
    loadProducts();
  }, []);

  const sourceProducts = dbProducts.length ? dbProducts : products;
  const product = sourceProducts.find((p) => p.id === Number(id));

  if (product && !product.variants && product.subProducts) {
    product.variants = product.subProducts;
  }

  if (!product) {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  /* =======================
     STYLES
  ======================= */
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    backButton: {
      padding: "1rem",
      margin: "1rem",
      backgroundColor: "#2c3e5f",
      color: "#fff",
      borderRadius: "50px",
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
    },
    hero: {
      height: "300px",
      backgroundImage: `url(${product.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(44,62,95,0.8)",
    },
    heroContent: {
      position: "relative",
      color: "#fff",
      textAlign: "center",
      padding: "0 2rem",
      maxWidth: "800px",
    },
    category: {
      color: "#FF6B47",
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "uppercase",
      marginBottom: "1rem",
    },
    title: {
      fontSize: "3rem",
      fontWeight: 300,
    },
    description: {
      fontSize: "1.25rem",
      color: "#cbd5e1",
    },
    content: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "4rem 2rem",
    },
    variantGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "2rem",
      marginTop: "2rem",
    },
    variantCard: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
    },
    variantImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    variantContent: {
      padding: "1.5rem",
      flexGrow: 1,
    },
    variantTitle: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "#2c3e5f",
      marginBottom: "0.5rem",
    },
    variantText: {
      color: "#64748b",
    },
    variantFooter: {
      borderTop: "1px solid #e5e7eb",
      padding: "0.75rem 1.5rem",
    },
    contactLink: {
      color: "#2563eb",
      textDecoration: "underline",
      fontSize: "0.9rem",
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate("/products")} style={styles.backButton}>
        ← Back to Products
      </button>

      <div style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.category}>{product.category}</div>
          <h1 style={styles.title}>{product.title}</h1>
          <p style={styles.description}>{product.shortDescription}</p>
        </div>
      </div>

      <div style={styles.content}>
        {product.variants && (
          <section>
            <h2>Available Variants</h2>

            <div style={styles.variantGrid}>
              {product.variants.map((variant) => (
                <div key={variant.id} style={styles.variantCard}>
                  <img
                    src={variant.image}
                    alt={variant.name}
                    style={styles.variantImage}
                  />

                  <div style={styles.variantContent}>
                    <h3 style={styles.variantTitle}>{variant.name}</h3>
                    <p style={styles.variantText}>{variant.description}</p>
                  </div>

                  <div style={styles.variantFooter}>
                    <Link to="/contact" style={styles.contactLink}>
                      Contact Us →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
