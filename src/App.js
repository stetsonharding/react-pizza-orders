import { createGlobalStyle } from "styled-components";
import { NavBar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";

const GlobalStyles = createGlobalStyle`
body{
  font-family: 'Open Sans', sans-serif;
  margin: 0;
 
  h1, h2,h3 {
    font-family: 'Righteous', cursive;
  }
}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Banner />
      <div>Hello pizza</div>
    </>
  );
}

export default App;
