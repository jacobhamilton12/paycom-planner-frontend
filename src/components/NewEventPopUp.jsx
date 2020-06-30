import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { EventContexts } from "./EventContexts";

const PopUpOuter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopUpInner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 20px;
  background: white;
`;

const XButton = styled.div`
  border: 1px solid lightgray;
  color: white;
  background: lightgray;
  height: 18px;
  width: 18px;
  cursor: pointer;
  margin-right: 10px;
  line-height: 17px;
  border-radius: 50%;
`;

const RightFlexBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 90%;
  max-width: 90%;
  height: calc(130px + 5vw);
  border-radius: 15px;
  border: 2px solid #73ad21;
`;

const P = styled.p`
  margin-bottom: 0;
`;

const Input = styled.input`
  height: 25px;
  border: 2px solid #73ad21;
  border-radius: 5px;
  width: 50%;
`;

const CenterFlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default function NewEventPopUp() {
  const {
    isNewEventPopUpOpen,
    setIsNewEventPopUpOpen,
    handleNewEventData,
    eventDate,
    eventEdit,
  } = useContext(EventContexts);

  let eventDateCopy = new Date(eventDate.getTime());
  let currentTime = new Date();
  eventDateCopy.setHours(currentTime.getHours());
  eventDateCopy.setMinutes(currentTime.getMinutes());
  eventDateCopy.setSeconds(currentTime.getSeconds());
  eventDateCopy.setMilliseconds(currentTime.getMilliseconds());

  const [selectedDate, setSelectedDate] = useState(eventDateCopy);
  const [eventName, setEventName] = useState(eventEdit.name);
  const [eventDesc, setEventDesc] = useState(eventEdit.desc);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  function handleSubmit() {
    handleNewEventData({
      name: eventName,
      date: selectedDate,
      desc: eventDesc,
    });
  }

  return (
    <PopUpOuter>
      <PopUpInner>
        <RightFlexBox>
          <XButton onClick={() => setIsNewEventPopUpOpen(!isNewEventPopUpOpen)}>
            &times;
          </XButton>
        </RightFlexBox>
        <h2>Create New Event:</h2>
        <CenterFlexBox>
          <label>Event Name:</label>
          <Input
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            type="text"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
        </CenterFlexBox>
        <P>Description:</P>
        <TextArea
          onChange={(e) => setEventDesc(e.target.value)}
          value={eventDesc}
          name="paragraph_text"
          cols="50"
          rows="10"
        ></TextArea>
        <br></br>
        <input onClick={handleSubmit} type="submit" value="Submit" />
      </PopUpInner>
    </PopUpOuter>
  );
}
