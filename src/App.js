import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
  font-family: 'Open Sans', sans-serif;
 
  h1, h2,h3 {
    font-family: 'Righteous', cursive;
  }
}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <p>Pizza Reiah</p>
        <h2>Testing Pizza Heading Font</h2>
      </div>
    </>
  );
}

export default App;
