import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Whatsapp = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    < a
      href="https://wa.me/+918217524980"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: isMobile ? "24px" : "32px",
        right: isMobile ? "24px" : "32px",
        background: "#25D366",
        color: "white",
        width: "68px",
        height: "68px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 25px rgba(0,0,0,0.22)",
        zIndex: 1000,
        transition: "transform 0.2s, box-shadow 0.2s",
      }
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.14)";
        e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.28)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.22)";
      }}
    >
      <FaWhatsapp size={36} />
    </a >
  )
}