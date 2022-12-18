import React from "react";

function FooterContact({
  emailIcon,
  email,
  locationIcon,
  location,
  phoneIcon,
  phoneNumber,
}) {
  return (
    <div className="footer-contact">
      <h3 className="contact-footer-title">Contact Us</h3>
      <div className="contact-type-footer">
        <img src={emailIcon} alt="email Icon" />
        <a href={email} className="mailto-footer">
          {email}
        </a>
      </div>
      <div className="contact-type-footer">
        <img src={locationIcon} alt="location Icon" />
        <p className="footer-location">{location}</p>
      </div>
      <div className="contact-type-footer">
        <img src={phoneIcon} alt="phone Icon" />
        <a href={phoneNumber} className="phone-footer">
          {phoneNumber}
        </a>
      </div>
    </div>
  );
}

export default FooterContact;
