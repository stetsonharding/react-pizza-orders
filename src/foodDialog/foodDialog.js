import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../MenuGrid/MenuGrid";
import { blitzPizzaTheme } from "../styles/colors";
import { Title } from "../styles/title";

import { QuantityInput } from "./QuantityInput";
import { Toppings } from "./Toppings";
import { Beverage } from "./Beverage";

//format price function
import { formatPrice } from "../Data/MenuData";

//hooks
import { useQuanity } from "../Hooks/useQuantity";
import { useToppings } from "../Hooks/useToppings";
import { useBeverage } from "../Hooks/useBeverage";

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
  min-height: 10px;
  padding: 10px 40px;
  margin-bottom: 10px;
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

//calculating price
export function getPrice(order) {
  const calculatedOrder = order.price * order.quantity;

  return calculatedOrder;
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuanity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const beverageRadio = useBeverage(openFood.beverages);

  //Close Dialog box
  const CloseDialog = () => {
    setOpenFood();
  };

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    beverage: beverageRadio.value,
  };

  const AddToOrder = () => {
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

          <DialogInformation>
            <QuantityInput quantity={quantity} />
          </DialogInformation>

          <DialogInformation>
            {/* Show toppings grid if a pizza card is clicked on. */}
            {openFood.section === "Pizza" && (
              <>
                <h3>Would you like to add extra Toppings?</h3>
                <Toppings {...toppings} />
              </>
            )}

            {openFood.section === "Beverages" && (
              <Beverage openFood={openFood} beverageRadio={beverageRadio} />
            )}
          </DialogInformation>

          <DialogFooter>
            <ConfirmButton onClick={AddToOrder}>
              {`Update Order: ${formatPrice(getPrice(order))}`}
            </ConfirmButton>
          </DialogFooter>
        </Dialog>
        <DialogShadow onClick={CloseDialog} />
      </>
    )
  );
}

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
