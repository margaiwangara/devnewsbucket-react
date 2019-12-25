import React from "react";
import styled from "styled-components";

// colors
import { colors } from "../../utils/cssvars";

export default function CardContainer() {
  return (
    <Container>
      <MainCard>
        <CardTop>
          <CardTopImg
            src="https://source.unsplash.com/random/1280x720"
            alt="post-image"
          />
          <CardTopOverlay />
        </CardTop>
        <CardBody>
          <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
          <CardDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            distinctio nulla aliquid officiis quod doloribus!
          </CardDetails>
          <CardBodyBottom>
            <CardBodyBottomDetails>php > laravel</CardBodyBottomDetails>
            <CardBodyBottomDetails>25th Dec 2019</CardBodyBottomDetails>
          </CardBodyBottom>
        </CardBody>
      </MainCard>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 10px 0;
`;

const MainCard = styled.div`
  background: ${colors.secondary};
  box-shadow: -2px 2px 5px ${colors.primaryDimmed};
  min-height: 250px;
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const CardTop = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const CardTopOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  background: ${colors.primaryOverlay};
`;

const CardTopImg = styled.img`
  height: 100%;
  width: 100%;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const CardTitle = styled.h3`
  color: ${colors.primary};
  font-size: ${25 / 16}rem;
  text-align: center;
  line-height: 25px;
`;

const CardDetails = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: ${20 / 16}rem;
  margin: 10px 0;
  text-align: center;
`;

const CardBodyBottom = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.primary};
  font-size: 1rem;
  letter-spacing: 1px;
`;

const CardBodyBottomDetails = styled.span`
  opacity: 0.85;
  &:first-child {
    text-transform: uppercase;
    font-weight: 700;
  }
`;
