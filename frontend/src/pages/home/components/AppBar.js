import React from "react";
import styled from "styled-components";

const HeaderBar = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
`;

export default function () {
  return (
    <HeaderBar>
      <div> Welcome to QR CryptoList </div>
      <div> Dashboard </div>
      <div> Settings </div>
    </HeaderBar>
  );
}
