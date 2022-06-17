import React from "react";
import styled from "styled-components";
import { ConfirmButton } from "../foodDialog/foodDialog";
import { DialogInformation } from "../foodDialog/foodDialog";
import { DialogFooter } from "../foodDialog/foodDialog";

export const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  background-color: white;
  box-shadow: 4px 0px 5px 4px grey;
  width: 340px;
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogInformation)`
  padding: 20px;
  height: 100%;
  overflow: auto;
`;

export function Order() {
  return (
    <OrderStyled>
      <OrderContent>
        you're order looks pretty empty, let's fix that.
      </OrderContent>
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
