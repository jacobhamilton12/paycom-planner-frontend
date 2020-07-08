import React, { useContext } from "react";
import styled from "@emotion/styled";
import { EventContexts } from "./EventContexts";
import axios from "axios";

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
 const EventDayContainer = React.memo(({ dateNum }) => {
  const { openEventView, openNewEventPopUp, eventsData: events } = useContext(
    EventContexts
  );

  const handleEmptyClick = () => {
    axios.get(`/session.php`)
      .then(res => {
        if(res.data !== "Not logged in"){
          openNewEventPopUp(dateNum);
        }else{
          alert(res.data);
        }
      });
  };

  const handleEventClick = (e, event) => {
    openEventView(events.indexOf(event));
    e.stopPropagation();
  };

  return (
    <Box onClick={handleEmptyClick}>
      {events.map((event) =>
        new Date(parseInt(event.date)).getDate() === dateNum ? (
          <EventBox
            key={event.name + event.date}
            onClick={(e) => handleEventClick(e, event)}
          >
            {event.name}
          </EventBox>
          
        ) : null
      )}
    </Box>
  );
});
export default EventDayContainer;
