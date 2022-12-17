import React from "react";

function SlideCard({
  sliderCardImg,
  sliderPersonName,
  starImg,
  sliderCardText,
}) {
  return (
    <div className="slide-card">
      <div className="slider-card-info">
        <img
          src={sliderCardImg}
          alt="slider Card Img"
          className="slider-card-img"
        />
        <div className="slider-card-person">
          <p className="slider-person-name">{sliderPersonName}</p>
          <div className="slider-stars-box">
            <img src={starImg} alt="star Img" className="slider-star" />
            <img src={starImg} alt="star Img" className="slider-star" />
            <img src={starImg} alt="star Img" className="slider-star" />
            <img src={starImg} alt="star Img" className="slider-star" />
            <img src={starImg} alt="star Img" className="slider-star" />
          </div>
        </div>
      </div>
      <p className="slider-card-text">{sliderCardText}</p>
    </div>
  );
}

export default SlideCard;
