import React from "react";
import NavBar from "../Header/NavBar";
import Container from "../MediaQuery/Container";
import GlobalLink from "../smallComponents/GlobalLink";

function Greeting({ greetingClassName }) {
  return (
    <div className={greetingClassName}>
      <div className="layout"></div>
      <Container>
        <div className="main-section-content">
          <NavBar />
          <div className="main-text-content">
            <h1 className="main-title">
              Welcome To <br /> Golden View Dine
            </h1>
            <p className="greeting-text">
              Explore the authentic vegan dishes with your friends and family
            </p>
            <GlobalLink>Read more</GlobalLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Greeting;
