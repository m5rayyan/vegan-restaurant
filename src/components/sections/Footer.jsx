import React from "react";
import Container from "../MediaQuery/Container";
import CopyRight from "../sharedComponents/CopyRight";
import FooterContact from "../sharedComponents/FooterContact";
import FooterLinks from "../sharedComponents/FooterLinks";
import FooterLogo from "../sharedComponents/FooterLogo";
import FooterSubscribe from "../sharedComponents/FooterSubscribe";

function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <Container>
          <div className="footer">
            <FooterLogo
              logoTitle="Golden View Dine "
              footerLogoInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
            />
            <FooterLinks footerLinksTitle="Other Links" />

            <FooterContact
              emailIcon="/assets/email.png"
              email="Gogreendineservice@gmail.com"
              locationIcon="/assets/location.png"
              location="AZ complex bylane3 Mandari Rd
            Mumbai 1100867"
              phoneIcon="/assets/phone.png"
              phoneNumber="+1800 287 256"
            />
          </div>
        </Container>
      </div>
      <FooterSubscribe
        subscribeImg="/assets/Subscribe.png"
        subscribeTo="our Newsletter"
      />
      <CopyRight
        copyRightTextOne="Copyright © 2022 Golden Dine website"
        copyRightTextTwo="All rights reserved"
      />
    </footer>
  );
}

export default Footer;
