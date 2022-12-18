import React from "react";

function FoodCategory({
  categoryImg,
  categoryAlt,
  categoryTitle,
  categoryExtraInfo,
  rsNumber,
}) {
  return (
    <div className="food-category">
      <img className="category-img" src={categoryImg} alt={categoryAlt} />
      <div className="category-info">
        <p className="category-title">{categoryTitle}</p>
        <p className="category-extra-info">{categoryExtraInfo}</p>
      </div>
      <div className="category-line"></div>
      <div className="category-rs">Rs {rsNumber}</div>
    </div>
  );
}

export default FoodCategory;
