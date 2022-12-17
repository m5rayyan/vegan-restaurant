// This Component Used In (About Us) and (Cooking Ingredients) Sections
import React from "react";
import Container from "../MediaQuery/Container";
import GlobalLink from "../smallComponents/GlobalLink";
import GlobalTitleAndSubTitle from "../smallComponents/GlobalTitleAndSubTitle";

function GeneralSection({
  generalSectionTitle,
  generalSectionSubTitle,
  generalSectionText,
  generalImgClass,
  generalSectionImg,
  generalSectionAlt,
}) {
  return (
    <div className="general-section">
      <Container>
        <div className="general-content">
          <div className="general-box">
            <GlobalTitleAndSubTitle
              sectionTitle={generalSectionTitle}
              sectionSubTitle={generalSectionSubTitle}
            />
            <p className="general-info">{generalSectionText}</p>
            <GlobalLink>Read more</GlobalLink>
          </div>
          <div className="general-img">
            <img
              className={generalImgClass}
              src={generalSectionImg}
              alt={generalSectionAlt}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default GeneralSection;
