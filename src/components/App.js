import React from "react";
import AppContainer from "./AppContainer";
import "./App.css";

// components
import Header from "./app/Header";
import styled from "styled-components";

// colors
import { colors } from "../utils/cssvars";

function App() {
  return (
    <AppContainer>
      <Wrapper>
        <Header />
      </Wrapper>
    </AppContainer>
  );
}

const Wrapper = styled.main`
  max-width: 100%;
  overflow-x: hidden;
  background: ${colors.bodyBg};
  min-height: 100vh;
  font-family: "Raleway", sans-serif;
  font-size: ${25 / 16}rem;
  color: ${colors.secondary};
`;

export default App;
