import React from "react";
import styled from "styled-components";

// colors
import { colors } from "../../utils/cssvars";

// components
import CardContainer from "./CardContainer";

export default function Home() {
  return (
    <Articles>
      <Title>
        <TitleSpan>recently</TitleSpan> added
      </Title>
      <CardContainer />
    </Articles>
  );
}

const Articles = styled.section`
  width: 100%;
  padding: 15px 15px;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  color: ${colors.primary};
  font-size: ${30 / 16}rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-weight: 500;
  margin: 10px 0;
`;

const TitleSpan = styled.span`
  font-weight: 700;
`;
