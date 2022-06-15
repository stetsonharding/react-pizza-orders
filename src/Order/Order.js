import React from "react";
import styled from "styled-components";

export const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  background-color: white;
  box-shadow: 4px 0px 5px 4px grey;
  width: 340px;
  height: calc(100% - 55px);
`;

export function Order() {
  return (
    <OrderStyled>you're order looks pretty empty, let's fix that.</OrderStyled>
  );
}
