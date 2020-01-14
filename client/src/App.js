import React from "react";
import { createGlobalStyle } from "styled-components";

import WelcomePage from "./components/WelcomePage";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <WelcomePage />
    </div>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
}
*:focus {
    outline: none;
}
html {
  font-size: 62.5%;
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }
  h1, h2, h3, label {
    font-family: 'Roboto', sans-serif;
  }
  small a {
    font-family: 'Roboto Slab', serif;
  }
`;

