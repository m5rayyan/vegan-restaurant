import React from "react";
import Container from "../MediaQuery/Container";
import GlobalLink from "./GlobalLink";

function FooterSubscribe({ subscribeImg, subscribeTo }) {
  return (
    <div className="footer-subscribe">
      <Container>
        <div className="footer-subs-flex">
          <div className="subscribe-to">
            <img src={subscribeImg} alt="" className="subscribe-img" />
            <h3 className="subscribe-to-title">Subscribe to {subscribeTo}</h3>
          </div>
          <input
            className="subscribe-input"
            type="text"
            placeholder="Your Email id"
          />
          <GlobalLink>Subscribe</GlobalLink>
        </div>
      </Container>
    </div>
  );
}

export default FooterSubscribe;
