import React from "react";
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
let num = 0;
const getDate = (day, month, year) => {
  let date = new Date(month + " 1, " + year);
  if (num === 0) {
    if (day === days[date.getDay()]) {
      num += 1;
      return num;
    } else {
      return 0;
    }
  }
  const maxDate = new Date(year, month, 0).getDate();
  num += 1;
  if (num > maxDate) {
    num = 0;
  }
  return num;
};

const Week = (props) => {
  return (
    <tr>
      {days.map((day) => (
        <Day
          key={day + props.id}
          day={day}
          dateNum={getDate(day, props.month + 1, props.year)}
        />
      ))}
    </tr>
  );
};

export default Week;
