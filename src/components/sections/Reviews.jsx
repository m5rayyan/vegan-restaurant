import React from "react";
import Swiper from "../smallComponents/Swiper";
import GlobalTitleAndSubTitle from "../smallComponents/GlobalTitleAndSubTitle";

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
