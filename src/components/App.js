import React from "react";
import AppContainer from "./AppContainer";
import "./App.css";

// components
import Header from "./app/Header";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Wrapper>
        <Header />
      </Wrapper>
    </AppContainer>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e6ebe0;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

export default App;
