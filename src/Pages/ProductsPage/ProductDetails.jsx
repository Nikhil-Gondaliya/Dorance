import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Whatsapp } from "../../Components/Whatsapps";
import { getProducts } from "../../services/products";
import { productsData } from '../../data';
import "./ProductDetails.css";

export const ProductDetails = () => {
  const { id } = useParams();

  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadData = async () => {
    try {
      const fetchedProducts = await getProducts();

      // 🔹 Optional: filter by categoryId if route param is category id
      const filteredProducts = id
        ? fetchedProducts.filter((p) => String(p.categoryId) === String(id))
        : fetchedProducts;

      setDbProducts(filteredProducts);
    } catch (error) {
      console.error("Error loading products:", error);
      setDbProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const product = productsData.find((p) => p.id === Number(id));

  useEffect(() => {
    loadData();
  }, [id, loadData]);

  return (
    <div className="product-details-page">
      <Header />

      <div
        className="hero"
        style={{
          backgroundImage: `url(${product?.image})`,
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="category">{product?.category}</div>
          <h1 className="title">{product?.title}</h1>
          <p className="short-description">{product?.shortDescription}</p>
        </div>
      </div>

      <main className="main-content">
        {loading ? (
          <div className="center-message">Loading...</div>
        ) : dbProducts.length === 0 ? (
          <div className="center-message">No Data Found</div>
        ) : (
          <section className="variants-section">
            <h2>Products</h2>

            <div className="variants-grid">
              {dbProducts.map((item) => (
                <div key={item.id} className="variant-card">
                  <div className="variant-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="variant-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="variant-info">
                    <h3 className="variant-name">{item.name}</h3>
                    <p className="variant-desc">{item.description}</p>

                    {item.price > 0 && (
                      <p className="variant-price">₹ {item.price}</p>
                    )}

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

      <Whatsapp />
      <Footer />
    </div>
  );
};
