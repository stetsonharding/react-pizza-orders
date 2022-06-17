import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { NavBar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { FoodMenu } from "./Menu/Menu";
import { FoodDialog } from "./foodDialog/foodDialog";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <NavBar />
      <Order {...orders} />
      <Banner />
      <FoodMenu {...openFood} />
    </>
  );
}

export default App;
