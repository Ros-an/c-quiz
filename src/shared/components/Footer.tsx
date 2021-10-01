import React from "react";

const customStyle = {
  height: "5rem",
  background: "var(--color-head)",
  color: "white",
  fontSize: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
};
function Footer() {
  return (
    <footer style={customStyle}>
      <p>Made in India.</p>
    </footer>
  );
}

export default Footer;
