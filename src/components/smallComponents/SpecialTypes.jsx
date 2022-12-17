import React from "react";

function SpecialTypes({
  specialImg,
  specialAlt,
  specialTypeTitle,
  specialTypeText,
}) {
  return (
    <div className="special-type-card">
      <img src={specialImg} alt={specialAlt} />
      <span className="special-type-title">{specialTypeTitle}</span>
      <p className="special-type-text">{specialTypeText}</p>
    </div>
  );
}

export default SpecialTypes;
