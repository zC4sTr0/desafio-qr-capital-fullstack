import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../StateProvider/StateProvider";

const HeaderBar = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: blue;
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;

const ControlButton = ({ active, onClick, name }) => {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElem active={page === name} onClick={() => setPage(name)}>
          {name}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
};

export default function () {
  return (
    <HeaderBar>
      <div> Welcome to QR CryptoList </div>
      <ControlButton name="dashboard" active={false} />
      <ControlButton name="settings" active={false} />
    </HeaderBar>
  );
}
