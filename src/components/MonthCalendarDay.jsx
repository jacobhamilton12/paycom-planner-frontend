import React from "react";
import styled from "@emotion/styled";
import EventDayContainer from "./EventDayContainer";

const Td = styled.td`
  border: 1px solid black;
  font-size: calc(6px + 0.5vw);
`;

const GrayBox = styled.div`
  height: 12vh;
  width: 100%;
  display: block;
  background: gray;
`;

const Day = React.memo(({ date }) => {
  return (
    <Td>
      <div>
        {date.d}
        <EventDayContainer dateNum={date.d} eyear={date.y} emonth={date.m} />
      </div>
    </Td>
  );
});

export default Day;
