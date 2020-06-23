import React, { Component } from "react";
import Day from "./MonthCalendarDay";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Week = (props) => {
  return (
    <tr>
      {days.map((day) => (
        <Day key={day + props.id} day={day} />
      ))}
    </tr>
  );
};

export default Week;
