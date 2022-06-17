import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../MenuGrid/MenuGrid";
import { blitzPizzaTheme } from "../styles/colors";
import { Title } from "../styles/title";

const Dialog = styled.div`
  width: 500px;

  max-height: calc(100% - 100px);
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogInformation = styled.div`
  //border: 2px solid blue;
  overflow: auto;
  min-height: 100px;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  border-radius: 8px;
  color: white;
  letter-spacing: 1px;
  background-color: ${blitzPizzaTheme};
  text-align: center;
  padding: 10px;
  width: 200px;
  cursor: pointer;
`;

export const DialogFooter = styled.footer`
  box-shadow: 0px -2px 20px 0px grey;
  //border: 2px solid red;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  background-image: ${({ img }) => `url(${img});`};
  background-size: cover;
  background-position: center;
`;

const DialogBannerName = styled(FoodLabel)`
  padding: 5px 25px;
  position: absolute;
  top: 50px;
  font-size: 22px;
`;

export function FoodDialog({ openFood, setOpenFood, setOrders, orders }) {
  console.log(orders);
  //Close Dialog box
  const CloseDialog = () => {
    setOpenFood();
  };

  const AddToOrder = (order) => {
    setOrders([...orders, order]);
    CloseDialog();
  };

  return (
    openFood && (
      <>
        <Dialog>
          <DialogBanner img={openFood.img}>
            <DialogBannerName>{openFood.name}</DialogBannerName>
          </DialogBanner>

          <DialogInformation></DialogInformation>

          <DialogFooter>
            <ConfirmButton onClick={() => AddToOrder(openFood)}>
              Add To Order
            </ConfirmButton>
          </DialogFooter>
        </Dialog>
        <DialogShadow onClick={CloseDialog} />
      </>
    )
  );
}
