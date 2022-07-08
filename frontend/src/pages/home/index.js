import React from "react";
import styled, { css } from "styled-components";
import AppLayout from "./components/AppLayout";
import AppBar from "./components/AppBar";

const MyButton = styled.button`
  background-color: #f00;
  ${(props) =>
    props.primary === "3" &&
    css`
      background-color: #00f;
    `}
  color: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #f00;
  }
`;

const TomatoButton = styled(MyButton)`
  background-color: tomato;
  border-color: #f00;
`;

const HomePage = () => {
  return (
    <div className="home-page">
      <AppLayout>
        <AppBar></AppBar>
        <h1>Home Page </h1>
        <MyButton primary="2">Primary</MyButton>
        <TomatoButton primary="3"></TomatoButton>
      </AppLayout>
    </div>
  );
};

export default HomePage;
