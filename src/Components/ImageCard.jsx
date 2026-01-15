import React, { useState } from "react";

export const ImageCard = ({ styles, imgUrl, onClick, buttonLabel, isMobile }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <img
        src={imgUrl}
        alt="SMEOCEANWAYS Product"
        style={{
          width: "100%",
          maxWidth: "238px",
          maxHeight: "238px",
          height: "auto",
        }}
      />

      {/* Overlay (ON TOP) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "20px",
          transform: hover ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.35s ease",
          zIndex: 2, // 🔥 THIS FIXES IT
          gap: "10px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Label */}
          <span
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: "500",
              letterSpacing: "0.04em",
              opacity: 0.9,
            }}
          >
            {buttonLabel}
          </span>

          {/* Download Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            style={{
              backgroundColor: "#FF6B47",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "30px",
              fontSize: isMobile ? "10px" : "14px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            Download Catalogue
          </button>
        </div>

      </div>
    </div>
  );
};
