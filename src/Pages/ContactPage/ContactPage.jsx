import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Whatsapp } from "../../Components/Whatsapps";
import emailjs from "@emailjs/browser";

export function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    emailjs
      .send(
        "service_3p0dm3n",
        "template_0s39ryb",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "w7dTstxC59sHsVYT9"
      )
      .then(
        () => {
          alert("Thank you! Your message has been sent.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );

  };

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <Header />

      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: isMobile ? "45vh" : "50vh",
          minHeight: "380px",
          background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1590496793907-4d66e2994b4d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcHBpbmclMjBwb3J0fGVufDB8fDB8fHww') center/cover`,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: isMobile ? "2.8rem" : "4.5rem", fontWeight: 100, margin: "0 0 2rem", letterSpacing: "-0.02em" }}>
            SME OCEANWAYS
          </h1>
          <p style={{ fontSize: isMobile ? "1.35rem" : "1.9rem", maxWidth: "820px", margin: "0 auto", fontWeight: 300, opacity: 0.92 }}>
            Where Quality Meets Global Trade
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "3.5rem 1.25rem" : "2rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "5fr 7fr",
            gap: isMobile ? "3.5rem" : "5.5rem",
          }}
        >
          {/* LEFT – Contact Info */}
          <div>
            <h2 style={{ fontSize: isMobile ? "2.1rem" : "2.8rem", margin: "0 0 2rem", color: "#111827", fontWeight: 100 }}>
              Get in touch
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem", fontSize: "1.05rem", color: "#374151" }}>
              <a href="tel:+918217524980" style={contactLinkStyle}>
                <FaPhoneAlt style={iconStyle} />+91 82175 24980
              </a>

              <a href="mailto:smeoceanways@gmail.com" style={contactLinkStyle}>
                <FaEnvelope style={iconStyle} /> smeoceanways@gmail.com
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <FaMapMarkerAlt style={{ ...iconStyle, marginTop: "4px" }} />
                <div>
                  SME Oceanways, Urja-9 IN-<br />
                  4 Street-2 OPP. Toyota showroom<br />
                  Gondal road, Village- Kangashiyali<br />
                  Taluka- Lodhika, Rajkot-360022
                </div>
              </div>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "1.2rem", color: "#4b5563", fontWeight: 600 }}>
                Follow Us
              </h3>
              <div style={{ display: "flex", gap: "1.4rem" }}>
                {[
                  { Icon: FaFacebookF, href: "https://www.facebook.com/people/Sme-Oceanways/61583137959709/" },
                  { Icon: FaInstagram, href: "https://www.instagram.com/smeoceanways" },
                  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/jaimin-ramani-856006395/" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "1.7rem",
                      color: "#6b7280",
                      transition: "color 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FF6B47";
                      e.currentTarget.style.transform = "scale(1.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#6b7280";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT – Form */}
          <div
            style={{
              background: "white",
              padding: isMobile ? "2.2rem 1.8rem" : "2.8rem 3rem",
              borderRadius: "16px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.07)",
              border: "1px solid #f1f5f9",
            }}
          >
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.5rem", margin: "0 0 0.6rem", color: "#111827", fontWeight: 100 }}>
              Send Query
            </h2>
            <p style={{ color: "#6b7280", marginBottom: "2.2rem", fontSize: "1.05rem" }}>
              We'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ margin: "1.5rem 0" }}>
                <label style={labelStyle}>Your Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 999.. ...."
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry / Feedback"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label style={labelStyle}>Message / Review *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we assist you today?"
                  style={{ ...inputStyle, minHeight: "135px", resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "#FF6B47",
                  color: "white",
                  border: "none",
                  padding: "1rem 2.6rem",
                  borderRadius: "9999px",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ea580c";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FF6B47";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <iframe
        title="SME Enterprises Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.0220897128343!2d70.8033725!3d22.201266800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835e7bcdc70a3%3A0x42436db1e1611995!2sSME%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1768487536192!5m2!1sen!2sin"
        width="100%"
        height="250px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <Whatsapp />

      <Footer isMobile={isMobile} />
    </div>
  );
}

const iconStyle = {
  fontSize: "1.4rem",
  color: "#FF6B47",
  minWidth: "28px",
};

const contactLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  textDecoration: "none",
  color: "inherit",
  transition: "color 0.2s",
};

const labelStyle = {
  display: "block",
  marginBottom: "0.55rem",
  fontWeight: 500,
  color: "#374151",
  fontSize: "0.98rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.95rem 1.15rem",
  border: "1px solid #d1d5db",
  borderRadius: "10px",
  fontSize: "1rem",
  background: "#ffffff",
  transition: "border-color 0.2s, box-shadow 0.2s",
  outline: "none",
  boxSizing: "border-box",
  ":focus": {
    borderColor: "#FF6B47",
    boxShadow: "0 0 0 3px rgba(255,107,71,0.15)",
  },
};