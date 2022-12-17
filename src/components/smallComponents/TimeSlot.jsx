import React from "react";

function TimeSlot() {
  return (
    <div className="time-slot-dropdown">
      <p className="tsd-title">Available Slots</p>
      <div className="tsd-content">
        <div className="tsd-time">5 to 6 p.m</div>
        <div className="tsd-time">6 to 7 p.m</div>
        <div className="tsd-time">7 to 8 p.m</div>
        <div className="tsd-time">8 to 9 p.m</div>
      </div>
    </div>
  );
}

export default TimeSlot;
