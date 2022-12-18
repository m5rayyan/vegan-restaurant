import React from "react";
import BlogCard from "../sharedComponents/BlogCard";
import GlobalTitleAndSubTitle from "../sharedComponents/GlobalTitleAndSubTitle";

function Blogs() {
  return (
    <div className="blogs-section">
      <GlobalTitleAndSubTitle
        sectionTitle="Blogs"
        sectionSubTitle="words from our food lovers"
      />
      <div className="blog-box-flex">
        <BlogCard
          blogCardImg="/assets/dining1.png"
          blogCardTitle="Cooking Dining Experience"
          blogCardExplanation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        />
        <BlogCard
          blogCardImg="/assets/dining2.png"
          blogCardTitle="Cooking Dining Experience"
          blogCardExplanation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        />
        <BlogCard
          blogCardImg="/assets/dining3.png"
          blogCardTitle="Cooking Dining Experience"
          blogCardExplanation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        />
      </div>
    </div>
  );
}

export default Blogs;
