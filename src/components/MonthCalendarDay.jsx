import React, { useState } from "react";
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

function Day({ key, day, datenum, toggle, events }) {
  return (
    <Td>
      {datenum > 0 ? (
        <div>
          {day + ", " + datenum}
          <EventDayContainer
            events={events}
            datenum={datenum}
            toggle={toggle}
          />
        </div>
      ) : (
        <GrayBox />
      )}
    </Td>
  );
}

export default Day;
