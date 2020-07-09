import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { LoginContext } from "./LoginContext";

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
  const [eventEdit, setEventEdit] = useState({ name: "", user: "", description: "", date: "" });
  const { email } = useContext(LoginContext)

  function handleNewEventData(data) {
    axios.post(`/events.php`, data)
      .then(res => {
        if(res.data === "success"){
          setIsNewEventPopUpOpen(!isNewEventPopUpOpen);
          console.log(res.data);
        }else{
          console.log(res);
        }
      });
    setEventsData([...eventsData, data]);
  }

  function openNewEventPopUp(dayNum, eyear, emonth, event = { name: "", user: email, description: "", date: "" }) {
    setDay(dayNum);
    setEventEdit(event);
    setEventDate(new Date(eyear, emonth, dayNum));
    setIsNewEventPopUpOpen(true);
  }

  function openEventView(index) {
    setEventId(index);
    setIsEventPopUpOpen(true);
  }

  function deleteEvent(index) {
    axios.post(`/deleteEvent.php`, eventsData[index])
      .then(res => {
        if(res !== "failed"){
          setIsEventPopUpOpen(false);
          let array = [...eventsData];
          array.splice(index, 1);
          setEventsData(array);
        }else{
          console.log(res);
        }
      });
    
  }

  function editEvent(index) {
    let event = eventsData[index];
    let dayNum = new Date(parseInt(event.date)).getDate();
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
        setEventsData,
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
