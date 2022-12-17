import React from "react";
import Container from "../MediaQuery/Container";
import Calendar from "../smallComponents/Calendar";
import GlobalTitleAndSubTitle from "../smallComponents/GlobalTitleAndSubTitle";
import OccupancyDropdown from "../smallComponents/OccupancyDropdown";
import TimeSlot from "../smallComponents/TimeSlot";

function Form() {
  return (
    <Container>
      <div className="form-booking-body">
        <GlobalTitleAndSubTitle
          sectionTitle="Reserve a seat"
          sectionSubTitle="Book a table on time"
        />
        <div className="form-inputs">
          <input
            type="text"
            className="person-name input-style"
            placeholder="Your full Name"
          />
          <input
            type="text"
            className="person-phone-number input-style"
            placeholder="Your Phone Number"
          />
        </div>
        {/* <Calendar /> */}
        {/* <TimeSlot /> */}
        <OccupancyDropdown />
      </div>
    </Container>
  );
}

export default Form;
