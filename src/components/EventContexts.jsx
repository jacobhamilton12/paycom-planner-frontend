import React, { useState, createContext } from "react";
import axios from "axios";

export const EventContexts = createContext();

export const EventsProvider = (props) => {
  const [isNewEventPopUpOpen, setIsNewEventPopUpOpen] = useState(false);
  const [isEventPopUpOpen, setIsEventPopUpOpen] = useState(false);
  const [eventsData, setEventsData] = useState([]);
  const [eventId, setEventId] = useState(-1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth()); // month is zero indexed
  const [day, setDay] = useState(currentDate.getDay());
  const [eventDate, setEventDate] = useState(new Date(year, month, day));
  const [eventEdit, setEventEdit] = useState({ name: "", desc: "", date: "" });

  function handleNewEventData({name, date, desc}) {
    setEventsData([...eventsData, {name, date, desc}]);
    date = date.getTime();
    axios.post(`/events.php`, {name, date, desc})
      .then(res => {
        if(res.data === "success"){
          setIsNewEventPopUpOpen(!isNewEventPopUpOpen);
          console.log(res.data);
        }else{
          console.log(res.data);
        }
      });
  }

  function openNewEventPopUp(dayNum, event = { name: "", desc: "", date: "" }) {
    setDay(dayNum);
    setEventEdit(event);
    setEventDate(new Date(year, month, dayNum));
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

  function editEvent(index) {
    let event = eventsData[index];
    let dayNum = event.date.getDate();
    deleteEvent(index);
    openNewEventPopUp(dayNum, event);
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
        year,
        month,
        day,
        setYear,
        setMonth,
        setDay,
        setCurrentDate,
        editEvent,
        eventEdit,
      }}
    >
      {props.children}
    </EventContexts.Provider>
  );
};
