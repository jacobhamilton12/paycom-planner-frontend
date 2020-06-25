import React, { Component } from "react";
import styled from "@emotion/styled";

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

const StyledDiv = styled.div`
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

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

export default class EventForumPopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <PopUpOuter>
        <PopUpInner>
          <Container>
            <StyledDiv onClick={this.handleClick}>&times;</StyledDiv>
          </Container>

          <p>I'm A Pop Up!!!</p>
        </PopUpInner>
      </PopUpOuter>
    );
  }
}
