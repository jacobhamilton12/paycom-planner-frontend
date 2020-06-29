import React, { useContext } from "react";
import styled from "@emotion/styled";
import { EventContexts } from "./EventContexts";

const Box = styled.div`
  justify-content: center;
  border: 1px solid black;
  height: 10vh;
  margin-bottom: -2px;
  display: block;
  margin-right: -2px;
  margin-left: -2px;
  cursor: pointer;
  overflow-y: auto;
  overflow-x: hidden;
`;

const EventBox = styled.div`
  height: 20%;
  width: 90%;
  margin: auto;
  border: 1px solid limegreen;
  margin-top: 2px;
  background: linear-gradient(lightgreen, white);
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
  font-size: calc(6px + 0.5vw);
  line-height: 17px;
  text-overflow: ellipsis;
`;

export default function EventDayContainer({ dateNum }) {
  const { handlePopUp, eventsData: events } = useContext(EventContexts);

  const handleClick = (e) => {
    handlePopUp(dateNum);
  };

  const handleEventClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Box onClick={handleClick}>
      {events.map((event) =>
        event.date === dateNum ? (
          <EventBox
            key={event.date + event.name + event.time}
            onClick={handleEventClick}
          >
            {event.name}
          </EventBox>
        ) : null
      )}
    </Box>
  );
}
