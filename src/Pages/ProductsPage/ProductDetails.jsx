import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllProducts } from "../../db/db";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

import "./ProductDetails.css"; // ← We'll move most styles here

export const ProductDetails = () => {
  const { id } = useParams();

  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const stored = await getAllProducts();
        if (stored?.length) {
          setDbProducts(stored);
        }
      } catch (error) {
        console.error("Failed to load products from DB:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const sourceProducts = dbProducts.length ? dbProducts : [];
  const product = sourceProducts.find((p) => p.id === Number(id));

  // Normalize variants / subProducts
  const variants = product?.variants || product?.subProducts || [];

  if (loading) {
    return (
      <div className="loading-container">
        <Header />
        <div className="loading">Loading product details...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <Header />

      <div
        className="hero"
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="category">{product.category}</div>
          <h1 className="title">{product.title}</h1>
          <p className="short-description">{product.shortDescription}</p>
        </div>
      </div>

      <main className="main-content">
        {variants.length > 0 && (
          <section className="variants-section">
            <h2>Available Variants</h2>

            <div className="variants-grid">
              {variants.map((variant) => (
                <div key={variant.id} className="variant-card">
                  <div className="variant-image-wrapper">
                    <img
                      src={variant.image}
                      alt={variant.name}
                      className="variant-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="variant-info">
                    <h3 className="variant-name">{variant.name}</h3>
                    <p className="variant-desc">{variant.description}</p>

                    <Link to="/contact" className="contact-link">
                      Contact for details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};
