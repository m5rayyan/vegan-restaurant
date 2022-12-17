import React from "react";

function CounterType({ counterImg, counterNumber, counterType }) {
  return (
    <div className="counter-type-box">
      <img src={counterImg} alt={counterType} />
      <div className="counter-info">
        <p className="counter-number">{counterNumber}+</p>
        <p className="counter-type">{counterType}</p>
      </div>
    </div>
  );
}

export default CounterType;
