import React from "react";

function GlobalTitleAndSubTitle({ sectionTitle, sectionSubTitle }) {
  return (
    <div className="global-titles">
      <h2 className="section-title">{sectionTitle}</h2>
      <p className="section-sub-title">{sectionSubTitle}</p>
    </div>
  );
}

export default GlobalTitleAndSubTitle;
