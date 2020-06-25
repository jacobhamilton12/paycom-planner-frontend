import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SimpleMenu(props) {
  const { handlemenutext, menutext } = props;

  return (
    <DropdownButton
      variant="success"
      id="dropdown-basic-button"
      title={menutext}
    >
      <Dropdown.Item
        id="Day"
        onClick={(event) => handlemenutext(event.target.id)}
      >
        Day
      </Dropdown.Item>
      <Dropdown.Item
        id="Week"
        onClick={(event) => handlemenutext(event.target.id)}
      >
        Week
      </Dropdown.Item>
      <Dropdown.Item
        id="Month"
        onClick={(event) => handlemenutext(event.target.id)}
      >
        Month
      </Dropdown.Item>
      <Dropdown.Item
        id="Year"
        onClick={(event) => handlemenutext(event.target.id)}
      >
        Year
      </Dropdown.Item>
    </DropdownButton>
  );
}
