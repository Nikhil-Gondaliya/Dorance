import React, { useEffect, useState } from "react";
import { getAllProducts, saveProducts } from "../../db/db";
import AddProduct from "../AddProduct/AddProduct";

export default function ProductTable() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState(null);
  const [addOpen, setAddOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const stored = await getAllProducts();
    setData(stored || []);
  };

  const handleDeleteClick = (categoryId, subProductId) => {
    setDeleteInfo({ categoryId, subProductId });
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteInfo) return;

    const updated = data.map((cat) => {
      if (cat.id === deleteInfo.categoryId) {
        return {
          ...cat,
          subProducts: (cat.subProducts || []).filter(
            (sub) => sub.id !== deleteInfo.subProductId
          ),
        };
      }
      return cat;
    });

    setData(updated);
    await saveProducts(updated);

    setOpen(false);
    setDeleteInfo(null);
  };

  const handleCancelDelete = () => {
    setOpen(false);
    setDeleteInfo(null);
  };

  console.log(data)

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Products</h2>
          <button
            style={styles.addButton}
            onClick={() => setAddOpen(true)}
          >
            + Add Product
          </button>
        </div>

        {/* Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Product</th>
                <th style={{ ...styles.th, textAlign: "center" }}>Image</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Description</th>
                <th style={{ ...styles.th, textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.flatMap(cat => (cat.subProducts || []).map((sub, idx) => ({
                category: cat,
                sub,
                rowIndex: idx
              }))).length === 0 ? (
                <tr>
                  <td colSpan={6} style={styles.emptyState}>
                    No products added yet.
                  </td>
                </tr>
              ) : (
                data.map((cat) =>
                  (cat.subProducts || []).map((sub, index) => (
                    <tr
                      key={sub.id}
                      style={{
                        ...styles.row,
                        backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb",
                      }}
                    >
                      <td style={styles.td}>{cat.title}</td>
                      <td style={{ ...styles.td, fontWeight: 600 }}>{sub.name}</td>
                      <td style={{ ...styles.td, textAlign: "center" }}>
                        {sub.image ? <img src={sub.image} alt={sub.name} style={styles.productImage} /> : "—"}
                      </td>
                      <td style={styles.td}>₹{sub.price?.toLocaleString() || "0"}</td>
                      <td style={styles.descriptionCell} title={sub.description}>
                        {sub.description || "—"}
                      </td>
                      <td style={{ ...styles.td, textAlign: "center" }}>
                        <button
                          style={styles.deleteButton}
                          onClick={() => handleDeleteClick(cat.id, sub.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation */}
      {open && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3 style={styles.modalTitle}>Delete Product</h3>
            <p style={styles.modalText}>
              Are you sure you want to delete this product?
            </p>
            <div style={styles.modalActions}>
              <button style={styles.cancelBtn} onClick={handleCancelDelete}>
                Cancel
              </button>
              <button style={styles.confirmBtn} onClick={handleConfirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Product Dialog */}
      {addOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.addModal}>
            <AddProduct
              onClose={() => setAddOpen(false)}
              onSuccess={() => {
                setAddOpen(false);
                loadData();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= IMPROVED STYLES ================= */
const styles = {
  container: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "2rem 1rem",
  },
  card: {
    maxWidth: "1400px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 2rem",
    borderBottom: "1px solid #e2e8f0",
  },
  title: {
    margin: 0,
    fontSize: "1.75rem",
    fontWeight: 700,
    color: "#0f172a",
  },
  addButton: {
    background: "#3b82f6",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s",
  },
  tableContainer: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    padding: "14px 16px",
    background: "#f1f5f9",
    textAlign: "left",
    fontWeight: 600,
    color: "#334155",
    borderBottom: "2px solid #e2e8f0",
  },
  td: {
    padding: "16px",
    borderBottom: "1px solid #e5e7eb",
    color: "#1e293b",
  },
  descriptionCell: {
    padding: "16px",
    borderBottom: "1px solid #e5e7eb",
    maxWidth: "400px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#475569",
  },
  productImage: {
    width: "64px",
    height: "64px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
  },
  deleteButton: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background 0.2s",
  },
  row: {
    transition: "background-color 0.2s",
  },
  emptyState: {
    padding: "4rem 2rem",
    textAlign: "center",
    color: "#64748b",
    fontSize: "1.1rem",
  },

  // Modal
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "white",
    borderRadius: "12px",
    padding: "2rem",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 20px 25px rgba(0,0,0,0.2)",
  },
  addModal: {
    background: "white",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "460px",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  modalTitle: {
    margin: "0 0 1rem 0",
    fontSize: "1.4rem",
    color: "#1e293b",
  },
  modalText: {
    margin: "0 0 2rem 0",
    color: "#475569",
  },
  modalActions: {
    display: "flex",
    gap: "1rem",
  },
  cancelBtn: {
    flex: 1,
    padding: "12px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    background: "white",
    cursor: "pointer",
    fontWeight: 500,
  },
  confirmBtn: {
    flex: 1,
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#ef4444",
    color: "white",
    fontWeight: 500,
    cursor: "pointer",
  },
};