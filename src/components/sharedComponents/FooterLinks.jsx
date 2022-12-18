import React from "react";
import Li from "./Li";
import UL from "./UL";

function FooterLinks({ footerLinksTitle }) {
  return (
    <div className="footer-links">
      <h3 className="footer-links-title">{footerLinksTitle}</h3>
      <UL ulClass="footer-links-list">
        <Li liClass="footer-li" liLink="#" liText="Privacy Policy" />
        <Li liClass="footer-li" liLink="#" liText="Terms & conditions" />
        <Li liClass="footer-li" liLink="#" liText="Blogs" />
        <Li liClass="footer-li" liLink="#" liText="our team" />
        <Li liClass="footer-li" liLink="#" liText="Our kitchen" />
      </UL>
    </div>
  );
}

export default FooterLinks;
