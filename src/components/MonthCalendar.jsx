import React, { Component } from "react";
import { getMonth } from "date-fns";
import Week from "./MonthCalendarWeek";
import styled from "@emotion/styled";

const Table = styled.table`
  border: 1px solid black;
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 5%;
  table-layout: fixed;
`;

const weekIds = [1, 2, 3, 4, 5];

class MonthCalendar extends Component {
  state = {
    month: new Date().getMonth(),
  };

  render() {
    return (
      <div>
        <thead>{this.state.month}</thead>
        <Table>
          {weekIds.map((id) => (
            <Week key={"week" + id} id={id} />
          ))}
        </Table>
      </div>
    );
  }
}

export default MonthCalendar;
