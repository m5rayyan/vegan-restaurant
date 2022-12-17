import React from "react";
import Container from "../MediaQuery/Container";
import GlobalLink from "../smallComponents/GlobalLink";

function JoinUs({ joinUsTitle, flatOff }) {
  return (
    <div className="join-us-section">
      <Container>
        <img className="join-us-img" src="/assets/joinus.png" alt="" />
        <div className="join-us-content">
          <h2 className="join-us-title">{joinUsTitle}</h2>
          <p className="flat-off">flat {flatOff}% off</p>
          <GlobalLink>Book table</GlobalLink>
        </div>
        <img className="join-us-img" src="/assets/joinus.png" alt="" />
      </Container>
    </div>
  );
}

export default JoinUs;
