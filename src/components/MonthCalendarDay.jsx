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

function Day({ day, dateNum }) {
  return (
    <Td>
      {dateNum > 0 ? (
        <div>
          {day + ", " + dateNum}
          <EventDayContainer dateNum={dateNum} />
        </div>
      ) : (
        <GrayBox />
      )}
    </Td>
  );
}

export default Day;
