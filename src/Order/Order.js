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

  @media (max-width: 500px) {
    position: relative;
    width: 100%;
  }
`;

const OrderContent = styled(DialogInformation)`
  padding: 20px;
  height: 100%;
  overflow: auto;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid black;
  ${({ editable }) =>
    editable
      ? `
  &:hover {
    cursor: pointer;
    background-color: #e7e7e7;
  }
  
  `
      : `
      pointer-events: none;
  `}
`;
const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 20px 150px 20px 60px;
  display: flex;
`;

const Toppings = styled.div`
  width: 300px;
  padding: 10px;
  color: grey;
  font-size: 10px;
`;

export function Order({ orders, setOrders, setOpenFood }) {
  let TAX_RATE = 0.1;

  //getting all extra toppings checked
  function getToppings(order) {
    return order.toppings
      .filter((topping) => topping.checked === true)
      .map((item) => item.name)
      .join(", ");
  }

  //subTotal
  const subTotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  //Delete item from order
  function DeleteItem(index) {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  }

  const tax = subTotal * TAX_RATE;

  const total = subTotal + tax;

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>You have no orders. Lets fix that</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map((order, index) => (
            <OrderContainer editable key={order.id}>
              <OrderItem onClick={(e) => setOpenFood({ ...order, index })}>
                <div>{order.quantity}</div>
                <div>
                  {order.name} <br />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    DeleteItem(index);
                  }}
                >
                  🗑️
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <Toppings>{getToppings(order)}</Toppings>
              {order.beverage && <OrderItem>{order.beverage}</OrderItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Subtotal:</div>
              <div>{formatPrice(subTotal)}</div>
              <div />
            </OrderItem>
            <OrderItem>
              <div />
              <div>Taxes:</div>
              <div>{formatPrice(tax)}</div>
              <div />
            </OrderItem>
            <OrderItem>
              <div />
              <div>
                <strong>Grand Total:</strong>
              </div>
              <div>
                <strong>{formatPrice(total)}</strong>
              </div>
              <div />
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
