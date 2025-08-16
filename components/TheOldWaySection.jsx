import React from "react";

const TheOldWaySection = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        backgroundColor: "#fcf8f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Center Text */}
      <h2
        style={{
          fontSize: "50px",
          fontWeight: "500",
          color: "#000",
          maxWidth: "47%",
          zIndex: "2",
          lineHeight: "1.3",
          textAlign: "left",
        }}
      >
        The Old Way Wastes Time — AccuraCam Changes That
      </h2>

      {/* Top Left Image */}
      <img
        src="/Images/API-Integrations.png"
        alt="API Integration"
        style={{
          position: "absolute",
          top: "50px",
          left: "50px",
          width: "170px",
          height: "auto",
          zIndex: "1",
          borderRadius: "10px",
        }}
      />

      {/* Top Right Image */}
      <img
        src="/Images/girl-mobile.jpg"
        alt="Girl with Mobile"
        style={{
          position: "absolute",
          top: "50px",
          right: "4%",
          width: "140px",
          height: "150px",
          zIndex: "1",
          borderRadius: "10px",
        }}
      />

      {/* Bottom Left Image */}
      <img
        src="/Images/girl-mobile.jpg"
        alt="Girl with Mobile Bottom"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "60px",
          width: "140px",
          height: "150px",
          zIndex: "1",
          borderRadius: "10px",
        }}
      />

      {/* Bottom Right Image */}
      <img
        src="/Images/construction.png"
        alt="Construction"
        style={{
          position: "absolute",
          bottom: "20px",
          right: "4%",
          width: "170px",
          height: "130px",
          zIndex: "1",
          borderRadius: "10px",
        }}
      />
    </section>
  );
};

export default TheOldWaySection;
