import React from "react";
import Container from "../MediaQuery/Container";
import FoodCategory from "../sharedComponents/FoodCategory";
import GlobalTitleAndSubTitle from "../sharedComponents/GlobalTitleAndSubTitle";

function OurMenu() {
  return (
    <div className="our-menu-section">
      <Container>
        <GlobalTitleAndSubTitle
          sectionTitle="Straight From Kitchen"
          sectionSubTitle="our menu"
        />
        <div className="category-box">
          <div className="category-side">
            <FoodCategory
              categoryImg="/assets/category1.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="222"
            />
            <FoodCategory
              categoryImg="/assets/category2.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="590"
            />
            <FoodCategory
              categoryImg="/assets/category3.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="130"
            />
            <FoodCategory
              categoryImg="/assets/category4.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="135"
            />
            <FoodCategory
              categoryImg="/assets/category5.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="148"
            />
            <FoodCategory
              categoryImg="/assets/category6.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="200"
            />
          </div>
          <div className="category-side">
            <FoodCategory
              categoryImg="/assets/category1.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="222"
            />
            <FoodCategory
              categoryImg="/assets/category2.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="590"
            />
            <FoodCategory
              categoryImg="/assets/category3.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="130"
            />
            <FoodCategory
              categoryImg="/assets/category4.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="135"
            />
            <FoodCategory
              categoryImg="/assets/category5.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="148"
            />
            <FoodCategory
              categoryImg="/assets/category6.png"
              categoryAlt="category"
              categoryTitle="Lorem ipsum dolor sit amet"
              categoryExtraInfo="Lorem ipsum dolor sit amet"
              rsNumber="200"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurMenu;
