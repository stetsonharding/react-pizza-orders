import { GlobalStyle } from "./styles/globalStyles";
import { NavBar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { FoodMenu } from "./Menu/Menu";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner />
      <FoodMenu />
    </>
  );
}

export default App;
