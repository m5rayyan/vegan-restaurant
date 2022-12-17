import React from "react";

function Calendar() {
  const dayNumber = () => {
    const numbers = [];
    for (let i = 1; i <= 31; i++) {
      numbers.push(i);
    }
    return numbers;
  };
  return (
    <div className="calendar">
      <div className="month-and-year-box">
        <img src="/assets/CalendarLeft.png" alt="" />
        <div>
          <span className="month">August</span>
          <span className="year">2022</span>
        </div>
        <img src="/assets/CalendarRight.png" alt="" />
      </div>
      <div className="days">
        <span className="day">mon</span>
        <span className="day">tue</span>
        <span className="day">wed</span>
        <span className="day">thru</span>
        <span className="day">fri</span>
        <span className="day">sat</span>
        <span className="day">sun</span>
      </div>
      <div className="days-num-box">
        {dayNumber().map((item) => (
          <div className="item">{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
