import React from "react";
import SocialLinks from "../constants/socialLinks";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          {new Date().getFullYear()} &copy;
          <span></span> All rights reserved - Designed by Hong Phuc
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
