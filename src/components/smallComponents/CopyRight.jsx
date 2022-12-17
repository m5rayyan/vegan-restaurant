import React from "react";
import Container from "../MediaQuery/Container";

function CopyRight({ copyRightTextOne, copyRightTextTwo }) {
  return (
    <div>
      <div className="copy-right-footer">
        <Container>
          <div className="copy-right-box">
            <p>{copyRightTextOne}</p>
            <p>{copyRightTextTwo}</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default CopyRight;
