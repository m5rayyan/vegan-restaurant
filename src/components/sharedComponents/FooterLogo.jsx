import React from "react";
import Logo from "./Logo";

function FooterLogo({ logoTitle, footerLogoInfo }) {
  return (
    <div className="footer-logo">
      <a href="#" className="footer-logo-box">
        <Logo imgSrc="/assets/logo.png" imgAlt="Logo" />
        <h2 className="logo-title">{logoTitle}</h2>
      </a>
      <p className="footer-logo-info">{footerLogoInfo}</p>
      <div className="social-links-box">
        <a href="#" className="social-icon-link">
          <img src="/assets/SocialIcons1.png" alt="Social Icon" />
        </a>
        <a href="#" className="social-icon-link">
          <img src="/assets/SocialIcons2.png" alt="Social Icon" />
        </a>
        <a href="#" className="social-icon-link">
          <img src="/assets/SocialIcons3.png" alt="Social Icon" />
        </a>
      </div>
    </div>
  );
}

export default FooterLogo;
