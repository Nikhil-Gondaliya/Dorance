import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Whatsapp } from "../../Components/Whatsapps";

export function AboutUsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        fontFamily: "sans-serif",
        color: "#333",
        lineHeight: "1.6",
      }}
    >
      {/* Navigation */}
      <Header />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#1a3c5e",
            marginBottom: "40px",
            fontSize: "2.8rem",
          }}
        >
          About Us
        </h1>

        {/* Company Introduction */}
        <section style={{ marginBottom: "60px" }}>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "900px",
              margin: "0 auto 30px",
              textAlign: "center",
            }}
          >
            SME Oceanways is an export-focused company from India, committed to delivering quality-driven products to global buyers. We work closely with trusted manufacturing partners to ensure consistent quality, competitive pricing, transparent communication, long-term cooperation with global distributors & importers, and reliable delivery for international markets.
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            We bridge the gap between reliable Indian manufacturers and international buyers by offering products that meet global standards and buyer expectations.
          </p>
        </section>

        {/* Why Choose Us */}
        <section style={{ marginBottom: "60px" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#1a3c5e",
              marginBottom: "30px",
              fontSize: "2.2rem",
            }}
          >
            Why Choose Us
          </h2>

          <ul
            style={{
              listStyle: "none",
              maxWidth: "700px",
              margin: "0 auto",
              padding: 0,
              fontSize: "1.1rem",
            }}
          >
            {[
              "Competitive global pricing",
              "Consistent quality assurance",
              "Custom branding & private labeling",
              "Export-compliant packaging",
              "Reliable logistics & documentation",
              "Long-term partnership approach",
              "Export-quality products",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "16px",
                  paddingLeft: "30px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#e67e22",
                    fontWeight: "bold",
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Our Product Range (Overview) */}
        <section style={{ marginBottom: "60px" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#1a3c5e",
              marginBottom: "30px",
              fontSize: "2.2rem",
            }}
          >
            Our Product Range
          </h2>

          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              maxWidth: "800px",
              margin: "0 auto 30px",
            }}
          >
            We offer a wide range of high-quality products serving residential, commercial, agricultural, and industrial sectors worldwide.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {[
              "Door Closers",
              "Cylinder Liners & Sleeves",
              "Gas Stoves",
              "Submersible Pumps",
              "Kitchenware",
            ].map((product, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "20px 30px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  minWidth: "200px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                {product}
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Products */}
        <section style={{ marginBottom: "60px" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#1a3c5e",
              marginBottom: "40px",
              fontSize: "2.2rem",
            }}
          >
            Our Products in Detail
          </h2>

          <div style={{ display: "grid", gap: "40px" }}>
            {[
              {
                title: "Door Closers",
                desc: "Hydraulic and automatic door closers designed for smooth, controlled operation. Suitable for high-traffic commercial and industrial environments.",
                apps: "Offices, Hospitals, Hotels, Industrial Buildings",
              },
              {
                title: "Cylinder Liners & Sleeves",
                desc: "Precision-engineered components designed for automotive and industrial engines, ensuring durability and consistent performance.",
                apps: "Automotive industry, Agriculture equipment, Industrial Engines & Machinery",
              },
              {
                title: "Gas Stoves",
                desc: "Designed for efficiency, safety, and durability, our gas stoves meet the requirements of both domestic and commercial kitchens. Manufactured using high-grade materials, they ensure long service life and reliable performance.",
                apps: "Homes, Restaurants, Hotels, Commercial Kitchens",
              },
              {
                title: "Submersible Pumps",
                desc: "Engineered for agricultural and industrial water applications, our submersible pumps deliver efficient performance under varying water conditions.",
                apps: "Agriculture, Irrigation, Borewells, Water Supply",
              },
              {
                title: "Kitchenware",
                desc: "Food-grade stainless steel kitchenware products offering durability, hygiene, and everyday convenience.",
                apps: "Households, Catering Services, Hotels",
              },

            ].map((product, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "30px",
                  borderRadius: "10px",
                  borderLeft: "5px solid #e67e22",
                }}
              >
                <h3 style={{ color: "#1a3c5e", marginTop: 0, fontSize: "1.6rem" }}>
                  🔹 {product.title}
                </h3>
                <p style={{ margin: "15px 0" }}>{product.desc}</p>
                <p style={{ fontWeight: "bold", color: "#555" }}>
                  <strong>Applications:</strong> {product.apps}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              backgroundColor: "#e8f4ff",
              padding: "40px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#1a3c5e", marginBottom: "20px" }}>Our Mission</h2>
            <p style={{ fontSize: "1.1rem" }}>
              To supply dependable, competitively priced products while building long-term global partnerships based on trust and performance.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#e8f4ff",
              padding: "40px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#1a3c5e", marginBottom: "20px" }}>Our Vision</h2>
            <p style={{ fontSize: "1.1rem" }}>
              To become a trusted global export partner known for quality, consistency, and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Closing Statement */}
        <p
          style={{
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#1a3c5e",
            marginTop: "60px",
          }}
        >
          An India-based export company supplying reliable consumer and industrial products to international markets.
        </p>
      </main>

      {/* Footer */}

      <Whatsapp />

      <Footer />
    </div>
  );
}