import React from "react";
import Container from "../MediaQuery/Container";
import GlobalTitleAndSubTitle from "../sharedComponents/GlobalTitleAndSubTitle";
import SpecialTypes from "../sharedComponents/SpecialTypes";

function Special() {
  return (
    <div className="special-section">
      <Container>
        <GlobalTitleAndSubTitle
          sectionTitle="special"
          sectionSubTitle="What makes us special"
        />

        <div className="special-cards-box">
          <SpecialTypes
            specialImg="/assets/freshFood.png"
            specialAlt="Fresh Food"
            specialTypeTitle="Fresh Food"
            specialTypeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          />
          <SpecialTypes
            specialImg="/assets/skilledChef.png"
            specialAlt="Skilled Chef"
            specialTypeTitle="Skilled Chef"
            specialTypeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          />
          <SpecialTypes
            specialImg="/assets/exoticDishes.png"
            specialAlt="Exotic Dishes"
            specialTypeTitle="Exotic Dishes"
            specialTypeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          />
        </div>
      </Container>
    </div>
  );
}

export default Special;
