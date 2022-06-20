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

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid black;
`;
const OrderItem = styled.div`
  padding: 10px 0px;
`;

export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>You have no orders. Lets fix that</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map((order) => (
            <OrderContainer key={order.id}>
              <OrderItem>{order.name}</OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}

      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
