import React, { Component } from "react";
import { getMonth } from "date-fns";
import Week from "./MonthCalendarWeek";
import styled from "@emotion/styled";

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

class MonthCalendar extends Component {
  state = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  render() {
    return (
      <div>
        <Table>
          <Thead>
            <tr>
              <td>{months[this.state.month]}</td>
            </tr>
          </Thead>
          <tbody>
            {weekIds.map((id) => (
              <Week
                year={this.state.year}
                month={this.state.month}
                key={"week" + id}
                id={id}
                events={this.props.events}
                toggle={this.props.toggle}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MonthCalendar;
