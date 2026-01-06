import React, { useState, useEffect } from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (Demo)");
  };

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      background: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      zIndex: 1000,
      padding: "0.8rem 0",
    },
    navContainer: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navMenu: {
      display: isMobile ? "none" : "flex",
      gap: "3rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      borderBottom: "2px solid transparent",
    },
    navLinkActive: {
      borderBottom: "2px solid #1e293b",
    },

    mainContainer: {
      marginTop: "80px",
      padding: isMobile ? "3rem 1.5rem" : "6rem 4rem",
      maxWidth: "1400px",
      margin: "80px auto 0",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "5rem",
      alignItems: "stretch",
    },
    pageTitle: {
      fontSize: isMobile ? "2.5rem" : "4rem",
      marginBottom: "1rem",
      color: "#2c3e5f",
    },
    pageSubtitle: {
      color: "#475569",
      marginBottom: "3rem",
    },
    formGroup: {
      marginBottom: "1.5rem",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontWeight: 500,
    },
    input: {
      width: "95%",
      padding: "1rem",
      background: "#e0e0e0ff",
      border: "1px solid",
      borderRadius: "6px",
    },
    textArea: {
      width: "95%",
      padding: "1rem",
      background: "#e0e0e0ff",
      border: "1px solid",
      borderRadius: "6px",
      minHeight: "150px",
    },
    submitButton: {
      background: "#FF6B47",
      color: "#fff",
      padding: "1rem 3rem",
      borderRadius: "50px",
      border: "none",
      cursor: "pointer",
      marginTop: "1rem",
    },

    mapWrapper: {
      width: "100%",
      height: isMobile ? "320px" : "100%",
      minHeight: "420px",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },

    footer: {
      background: "#2c3e5f",
      padding: isMobile ? "3rem 1.5rem" : "5rem 4rem",
      color: "#fff",
      marginTop: "6rem",
    },
    footerContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "3rem",
    },
    footerTitle: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    footerText: {
      color: "#cbd5e1",
      lineHeight: 1.6,
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

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Header />

      {/* MAIN */}
      <main style={styles.mainContainer}>
        <div style={styles.gridContainer}>
          {/* LEFT - FORM */}
          <div>
            <h2 style={styles.pageTitle}>Say Hello!</h2>
            <p style={styles.pageSubtitle}>
              Let’s start something great together.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name*</label>
                <input
                  style={styles.input}
                  name="firstName"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email*</label>
                <input
                  style={styles.input}
                  type="email"
                  name="email"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message*</label>
                <textarea
                  style={styles.textArea}
                  name="message"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <button style={styles.submitButton}>Submit</button>
            </form>
          </div>

          {/* RIGHT - GOOGLE MAP WITH PIN */}
          <div style={styles.mapWrapper}>
            <iframe
              title="SMEOceanways Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3694.0220897128343!2d70.8033725!3d22.2012668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835e7bcdc70a3%3A0x42436db1e1611995!2sSME%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1767713468162!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer isMobile={isMobile} />
    </div>
  );
}
