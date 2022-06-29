import React from "react";
import styled from "styled-components";
import { ConfirmButton } from "../foodDialog/foodDialog";
import { DialogInformation } from "../foodDialog/foodDialog";
import { DialogFooter } from "../foodDialog/foodDialog";

import { getPrice } from "../foodDialog/foodDialog";

//format price function
import { formatPrice } from "../Data/MenuData";

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
  display: grid;
  justify-content: space-between;
  grid-template-columns: 20px 150px 20px 60px;
  display: flex;
`;

export function Order({ orders }) {
  let TAX_RATE = 0.1;

  //subTotal
  const subTotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subTotal * TAX_RATE;

  const total = subTotal + tax;

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>You have no orders. Lets fix that</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map((order) => (
            <OrderContainer key={order.id}>
              <OrderItem>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div />
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div>
                <div> Sub-Total: {formatPrice(subTotal)} </div>
                <div>Tax: {formatPrice(tax)}</div>
                <div>
                  <strong>Grand Total: {formatPrice(total)}</strong>
                </div>
              </div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}

      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
