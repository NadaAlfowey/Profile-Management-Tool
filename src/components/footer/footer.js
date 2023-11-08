import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer class="footer-container">
        <small class="copyright">
          &copy; {new Date().getFullYear()} VAS Team | All Rights Reserved
        </small>
      </footer>
    </div>
  );
}

export default Footer;
