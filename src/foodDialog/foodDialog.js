import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../MenuGrid/MenuGrid";

const Dialog = styled.div`
  width: 500px;
  height: 2000px;
  max-height: calc(100% - 100px);
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  left: calc(50% - 250px);
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
  cursor: pointer;
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

export function FoodDialog({ openFood, setOpenFood }) {
  //Close Dialog box
  const CloseDialog = () => {
    setOpenFood();
  };

  return (
    openFood && (
      <>
        <Dialog>
          <DialogBanner img={openFood.img}>
            <DialogBannerName>{openFood.name}</DialogBannerName>
          </DialogBanner>
        </Dialog>
        <DialogShadow onClick={CloseDialog} />
      </>
    )
  );
}
