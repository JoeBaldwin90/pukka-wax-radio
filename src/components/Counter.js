import React from "react";
import CountUp from "react-countup";
import styled from "styled-components";

const Counter = styled.p`
  font-size: 3em;
  color: #fd9427;
  font-weight: 900;
  line-height: 1.25;
`;

export default ({ end = 0 }) => (
  <Counter>
    <CountUp
      start={0}
      end={end}
      delay={0}
      duration={2.75}
      separator={","}
    ></CountUp>
  </Counter>
);
