import React from "react";
import Counter from "./Counter";
import styled from "styled-components";

const StatContainer = styled.div`
  text-align: center;
  padding: 1em;
  margin-top: 1em;
`;

const StatName = styled.h3`
  font-size: 0.8em;
  font-weight: 900;
  text-transform: uppercase;
`;

const StatDescription = styled.p`
  font-size: 1em;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export default ({ statName, statNumber, statWord }) => (
  <StatContainer>
    <StatName>{statName}</StatName>
    <StatDescription>
      <Counter end={statNumber} />
      {statWord}
    </StatDescription>
  </StatContainer>
);
