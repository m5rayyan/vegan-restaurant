import React from "react";

function GlobalLink({ children }) {
  return (
    <div className="global-link">
      <a href="#">{children}</a>
    </div>
  );
}

export default GlobalLink;
