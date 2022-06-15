import React, { useState } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { NavBar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { FoodMenu } from "./Menu/Menu";
import { FoodDialog } from "./foodDialog/foodDialog";
import { Order } from "./Order/Order";
function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <NavBar />
      <Order />
      <Banner />
      <FoodMenu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
