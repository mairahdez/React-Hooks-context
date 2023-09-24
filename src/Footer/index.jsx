import React from "react";

const Footer = () => {
    const footerStyle = {
        backgroundcolor: "#333",
        color: "black",
        textAlign: "center",
        padding: "2px 0",
        fontSize: "18px"
    };

  return (
    <footer style={footerStyle}>
      <div>
        <p>AluraFoods: Deliciosamente Entregado, Tu Sabor en Cada Bocado.</p>
      </div>
    </footer>
  );
};

export default Footer;
