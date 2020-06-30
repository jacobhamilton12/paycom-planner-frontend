import React, { useState, createContext } from "react";

export const EventContexts = createContext();

export const EventsProvider = (props) => {
  const [isNewEventPopUpOpen, setIsNewEventPopUpOpen] = useState(false);
  const [isEventPopUpOpen, setIsEventPopUpOpen] = useState(false);
  const [eventDate, setEventDate] = useState("");
  const [eventsData, setEventsData] = useState([]);
  const [eventId, setEventId] = useState(-1);
  function handleNewEventData(data) {
    setIsNewEventPopUpOpen(!isNewEventPopUpOpen);
    setEventsData([...eventsData, data]);
  }

  function openNewEventPopUp(dayNum) {
    setEventDate(dayNum);
    setIsNewEventPopUpOpen(true);
  }

  function openEventView(index) {
    setEventId(index);
    setIsEventPopUpOpen(true);
  }

  function deleteEvent(index) {
    setIsEventPopUpOpen(false);
    let array = [...eventsData];
    array.splice(index, 1);
    setEventsData(array);
  }

  return (
    <EventContexts.Provider
      value={{
        isNewEventPopUpOpen,
        setIsNewEventPopUpOpen,
        eventDate,
        eventsData,
        openEventView,
        openNewEventPopUp,
        handleNewEventData,
        eventId,
        isEventPopUpOpen,
        setIsEventPopUpOpen,
        deleteEvent,
      }}
    >
      {props.children}
    </EventContexts.Provider>
  );
};
