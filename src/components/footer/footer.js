import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <small className="copyright">
          &copy; {new Date().getFullYear()} VAS Team | All Rights Reserved
        </small>
      </footer>
    </div>
  );
}

export default Footer;
