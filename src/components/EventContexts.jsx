import React, { useState, createContext } from "react";

export const EventContexts = createContext();

export const EventsProvider = (props) => {
  const [seen, setSeen] = useState(false);
  const [eventDate, setEventDate] = useState("");
  const [eventsData, setEventsData] = useState([]);
  function handlePopUpData(data) {
    setSeen(!seen);
    setEventsData([...eventsData, data]);
  }

  function handlePopUp(dayNum) {
    setSeen(!seen);
    setEventDate(dayNum);
  }

  return (
    <EventContexts.Provider
      value={{ seen, eventDate, eventsData, handlePopUp, handlePopUpData }}
    >
      {props.children}
    </EventContexts.Provider>
  );
};
