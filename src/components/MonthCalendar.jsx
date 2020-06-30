import React, { useContext } from "react";
import Week from "./MonthCalendarWeek";
import styled from "@emotion/styled";
import { EventContexts } from "./EventContexts";

const Table = styled.table`
  border: 1px solid black;
  width: 80%;
  min-width: 450px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0;
  table-layout: fixed;
  background: white;
`;
const Thead = styled.thead`
  margin-bottom: 0;
  padding-bottom: 0;
`;

const weekIds = [1, 2, 3, 4, 5];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function MonthCalendar() {
  const { month, year } = useContext(EventContexts);

  return (
    <div>
      <Table>
        <Thead>
          <tr>
            <td>{months[month]}</td>
          </tr>
        </Thead>
        <tbody>
          {weekIds.map((id) => (
            <Week year={year} month={month} key={"week" + id} id={id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MonthCalendar;
