import React from "react";

function Li({ liClass, liLink, liText }) {
  return (
    <li className={liClass}>
      <a href={liLink}>{liText}</a>
    </li>
  );
}

export default Li;
