import React, { useEffect, useState } from "react";
import { getAllProducts, saveProducts } from "../../db/db";
import AddProduct from "../AddProduct/AddProduct"; // 🔁 adjust path if needed

export default function ProductTable() {
  const [data, setData] = useState([]);

  // delete dialog
  const [open, setOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState(null);

  // add product dialog
  const [addOpen, setAddOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const stored = await getAllProducts();
    setData(stored || []);
  };

  /* ================= DELETE ================= */

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

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* ===== HEADER ===== */}
        <div style={styles.header}>
          <h2 style={styles.title}>Products Table</h2>

          <button
            style={styles.addBtn}
            onClick={() => setAddOpen(true)}
          >
            + Add Product
          </button>
        </div>

        {/* ===== TABLE ===== */}
        <div style={styles.tableWrapper}>
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
              {data.length === 0 && (
                <tr>
                  <td colSpan="6" style={styles.empty}>
                    No products found
                  </td>
                </tr>
              )}

              {data.map((cat) =>
                (cat.subProducts || []).map((sub, index) => (
                  <tr
                    key={sub.id}
                    style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}
                  >
                    <td style={styles.td}>{cat.title}</td>
                    <td style={styles.tdStrong}>{sub.name}</td>

                    <td style={{ ...styles.td, textAlign: "center" }}>
                      {sub.image ? (
                        <img
                          src={sub.image}
                          alt={sub.name}
                          style={styles.image}
                        />
                      ) : (
                        "—"
                      )}
                    </td>

                    <td style={styles.td}>₹ {sub.price || 0}</td>

                    <td style={styles.tdDescription} title={sub.description}>
                      {sub.description || "—"}
                    </td>

                    <td style={{ ...styles.td, textAlign: "center" }}>
                      <button
                        style={styles.deleteBtn}
                        onClick={() =>
                          handleDeleteClick(cat.id, sub.id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== DELETE CONFIRMATION DIALOG ===== */}
      {open && (
        <div style={styles.overlay}>
          <div style={styles.dialog}>
            <h3 style={styles.dialogTitle}>
              Are you sure you want to delete this?
            </h3>

            <div style={styles.dialogActions}>
              <button style={styles.noBtn} onClick={handleCancelDelete}>
                No
              </button>
              <button style={styles.yesBtn} onClick={handleConfirmDelete}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== ADD PRODUCT DIALOG ===== */}
      {addOpen && (
        <div style={styles.overlay}>
          <AddProduct
            onClose={() => setAddOpen(false)}
            onSuccess={() => {
              setAddOpen(false);
              loadData();
            }}
          />
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f7fb",
    padding: "3rem",
  },
  card: {
    maxWidth: "1200px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },

  /* Header */
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  title: {
    fontSize: "1.8rem",
    color: "#1e293b",
  },
  addBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
  },

  /* Table */
  tableWrapper: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse" },
  th: {
    padding: "14px",
    background: "#f1f5f9",
    borderBottom: "2px solid #e2e8f0",
    fontWeight: 600,
  },
  td: {
    padding: "14px",
    borderBottom: "1px solid #e5e7eb",
  },
  tdStrong: {
    padding: "14px",
    borderBottom: "1px solid #e5e7eb",
    fontWeight: 600,
  },
  tdDescription: {
    padding: "14px",
    borderBottom: "1px solid #e5e7eb",
    maxWidth: "380px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  image: {
    width: "56px",
    height: "56px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
  },
  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  rowEven: { background: "#ffffff" },
  rowOdd: { background: "#f9fafb" },
  empty: {
    textAlign: "center",
    padding: "2rem",
    color: "#64748b",
  },

  /* Overlay + dialogs */
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  dialog: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    width: "360px",
    textAlign: "center",
  },
  dialogLarge: {
    background: "#fff",
    width: "650px",
    maxHeight: "90vh",
    overflowY: "auto",
    borderRadius: "12px",
    padding: "1.5rem",
  },
  dialogHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  dialogTitle: {
    marginBottom: "1.5rem",
    fontSize: "1.1rem",
  },
  dialogActions: {
    display: "flex",
    gap: "1rem",
  },
  noBtn: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #cbd5f5",
    background: "#fff",
    cursor: "pointer",
  },
  yesBtn: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#ef4444",
    color: "#fff",
    cursor: "pointer",
  },
  closeBtn: {
    border: "none",
    background: "transparent",
    fontSize: "1.4rem",
    cursor: "pointer",
  },
};
