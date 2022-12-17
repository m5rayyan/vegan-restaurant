import React from "react";

function ReadLink({ readLinkText }) {
  return (
    <div className="read-link-box">
      <a href="#" className="read-link">
        {readLinkText}
      </a>
    </div>
  );
}

export default ReadLink;
