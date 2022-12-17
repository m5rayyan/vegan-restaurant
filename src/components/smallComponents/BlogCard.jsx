import React from "react";
import ReadLink from "./ReadLink";

function BlogCard({ blogCardImg, blogCardTitle, blogCardExplanation }) {
  return (
    <div className="blog-card">
      <img src={blogCardImg} alt="blog Card Img" className="blog-card-img" />
      <div className="bc-flex">
        <div className="blog-card-info">
          <h5 className="blog-card-title">{blogCardTitle}</h5>
          <p className="blog-card-explanation">{blogCardExplanation}</p>
        </div>
        <ReadLink readLinkText="read more" />
      </div>
    </div>
  );
}

export default BlogCard;
