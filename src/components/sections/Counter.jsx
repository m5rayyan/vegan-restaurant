import React from "react";
import Container from "../MediaQuery/Container";
import CounterType from "../sharedComponents/CounterType";

function Counter() {
  return (
    <div className="counter-section">
      <Container>
        <div className="counter-box">
          <CounterType
            counterImg="/assets/counter1.png"
            counterNumber="250"
            counterType="Delicacy"
          />
          <CounterType
            counterImg="/assets/counter2.png"
            counterNumber="100"
            counterType="renowned chefs"
          />
          <CounterType
            counterImg="/assets/counter3.png"
            counterNumber="30"
            counterType="Members"
          />
        </div>
      </Container>
    </div>
  );
}

export default Counter;
