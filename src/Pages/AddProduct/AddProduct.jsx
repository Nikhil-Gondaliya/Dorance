import React, { useEffect, useState } from "react";
import { productsData } from "../../data";
import { getAllProducts, saveProducts } from "../../db/db";

export default function AddProduct({ onClose, onSuccess }) {
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    categoryId: "",
    name: "",
    description: "",
    image: "",
    price: "",
  });

  /* 🔹 Load data from IndexedDB */
  useEffect(() => {
    const loadData = async () => {
      const stored = await getAllProducts();
      if (stored?.length > 0) {
        setData(stored);
      } else {
        setData(productsData);
        await saveProducts(productsData);
      }
    };
    loadData();
  }, []);

  /* 🔹 Handle inputs */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  /* 🔹 Image upload (Base64) */
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () =>
      setForm((p) => ({ ...p, image: reader.result }));
    reader.readAsDataURL(file);
  };

  /* 🔹 Submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.categoryId) return alert("Select category");

    const updated = data.map((cat) =>
      cat.id === Number(form.categoryId)
        ? {
          ...cat,
          subProducts: [
            ...(cat.subProducts || []),
            {
              id: Date.now(),
              name: form.name,
              description: form.description,
              image: form.image,
              price: Number(form.price),
            },
          ],
        }
        : cat
    );

    await saveProducts(updated);
    onSuccess?.();
    onClose?.();
  };

  return (
    <div style={styles.modal}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Add Product</h2>
        <button onClick={onClose} style={styles.close}>✕</button>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Category */}
        <div style={styles.field}>
          <label style={styles.label}>Category *</label>
          <select
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select category</option>
            {data.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        {/* Product Name */}
        <div style={styles.field}>
          <label style={styles.label}>Product Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Description */}
        <div style={styles.field}>
          <label style={styles.label}>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            style={{ ...styles.input, height: 90, resize: "none" }}
            placeholder="Short product description"
          />
        </div>

        {/* Image */}
        <div style={styles.field}>
          <label style={styles.label}>Product Image</label>
          <div style={styles.uploadBox}>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {form.image && (
              <img src={form.image} alt="preview" style={styles.preview} />
            )}
          </div>
        </div>

        {/* Price */}
        <div style={styles.field}>
          <label style={styles.label}>Price</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            style={styles.input}
            placeholder="₹ 0.00"
          />
        </div>

        {/* Actions */}
        <div style={styles.actions}>
          <button type="button" onClick={onClose} style={styles.cancel}>
            Cancel
          </button>
          <button type="submit" style={styles.submit}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  modal: {
    width: "100%",
    background: "#ffffff",
    borderRadius: 12,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    overflow: "hidden",
    fontFamily: "Inter, system-ui, sans-serif",
    boxSizing: "border-box", // ✅ FIX
  },

  header: {
    padding: "16px 20px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
  },

  title: {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#111827",
  },

  close: {
    border: "none",
    background: "transparent",
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "#6b7280",
  },

  form: {
    padding: 20,
    boxSizing: "border-box", // ✅ FIX
  },

  field: {
    marginBottom: 14,
    boxSizing: "border-box",
  },

  label: {
    display: "block",
    marginBottom: 6,
    fontSize: ".85rem",
    fontWeight: 500,
    color: "#374151",
  },

  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    background: "#f9fafb",
    fontSize: ".9rem",
    outline: "none",
    boxSizing: "border-box", // ✅ FIX (IMPORTANT)
  },

  uploadBox: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    boxSizing: "border-box",
  },

  preview: {
    width: 64,
    height: 64,
    objectFit: "cover",
    borderRadius: 8,
    border: "1px solid #e5e7eb",
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 20,
  },

  cancel: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    background: "#ffffff",
    cursor: "pointer",
  },

  submit: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    background: "#2563eb",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: 500,
  },
};
