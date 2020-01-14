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
const GlobalStyle = createGlobalStyle``;
