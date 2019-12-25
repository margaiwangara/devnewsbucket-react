import React, { useContext } from "react";
import moment from "moment";
import styled from "styled-components";

import { AppContext } from "../../context/appContext";

// colors
import { colors } from "../../utils/cssvars";

export default function CardContainer() {
  const articlesContext = useContext(AppContext);

  return (
    <Container>
      {articlesContext
        ? articlesContext.data.map(value => {
            return (
              <MainCard key={value._id}>
                <CardTop>
                  <CardTopImg src={value.image} alt="post-image" />
                  <CardTopOverlay />
                </CardTop>
                <CardBody>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDetails>{value.summary}</CardDetails>
                  <CardBodyBottom>
                    <CardBodyBottomDetails>
                      {value.language.name}
                      {value.language.framework
                        ? " > " + value.language.framework
                        : null}
                    </CardBodyBottomDetails>
                    <CardBodyBottomDetails>
                      {moment(new Date(value.datePublished)).format(
                        "Do MMM YYYY"
                      )}
                    </CardBodyBottomDetails>
                  </CardBodyBottom>
                </CardBody>
              </MainCard>
            );
          })
        : null}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: auto;
  max-width: 100%;
  margin: 10px 0;

  @media all and screen(min-width: 768px) {
    grid-template-columns: repeat(3, 300px);
    grid-column-gap: 10px;
  }
`;

const MainCard = styled.div`
  background: ${colors.secondary};
  box-shadow: -2px 2px 5px ${colors.primaryDimmed};
  min-height: 250px;
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-bottom: 15px;
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
