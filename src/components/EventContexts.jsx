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
  const [eventEdit, setEventEdit] = useState({});
  const { email } = useContext(LoginContext)

  function handleNewEventData(data) {
    axios.post(`/events.php`, data)
      .then(res => {
        if(res.data === "success"){
          setIsNewEventPopUpOpen(false);
          console.log(res);
        }else{
          console.log(res);
        }
      });
    setEventsData([...eventsData, data]);
  }

  function incrementAttendees(eventId){
    let copy = [...eventsData];
    let event = {...copy[eventId]};
    let array = JSON.parse(event.attendees);
    array.push(email);
    event.attendees = JSON.stringify(array);
    copy[eventId] = event;
    axios.post(`/incrementAttendees.php`, event)
      .then(res => {
        console.log(res);
        if(res.data === "success"){
          setEventsData(copy);
        }else{
          console.log(eventsData)
        }
      });
  }

  function removeAttendee(eventId){
    let copy = [...eventsData];
    let event = {...copy[eventId]};
    let array = JSON.parse(event.attendees);
    array.splice(array.indexOf(email), 1);
    event.attendees = JSON.stringify(array);
    copy[eventId] = event;
    axios.post(`/removeAttendee.php`, event)
      .then(res => {
        console.log(res);
        if(res.data === "success"){
          setEventsData(copy);
        }else{
          console.log(eventsData)
        }
      });
  }

  function openNewEventPopUp(dayNum, eyear, emonth, event = { name: "", user: email, description: "", date: "", attendees: [] }) {
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
    let month = new Date(parseInt(event.date)).getMonth();
    let year = new Date(parseInt(event.date)).getFullYear();
    deleteEvent(index);
    openNewEventPopUp(dayNum, year, month, event);
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
        incrementAttendees,
        removeAttendee,
      }}
    >
      {props.children}
    </EventContexts.Provider>
  );
};
