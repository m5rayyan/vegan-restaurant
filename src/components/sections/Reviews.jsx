import React from "react";
import Swiper from "../sharedComponents/Swiper";
import GlobalTitleAndSubTitle from "../sharedComponents/GlobalTitleAndSubTitle";

function Reviews() {
  return (
    <div className="reviews-section">
      <GlobalTitleAndSubTitle
        sectionTitle="Reviews"
        sectionSubTitle="words from our food lovers"
      />
      <Swiper />
    </div>
  );
}

export default Reviews;
