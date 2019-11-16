import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Mix from "./Mix";

const WhatsHot = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1em 5em 1em;

  @media (min-width: 60em) {
    padding: 0 2em 5em 2em;
  }
`;

const Home = ({ mixes, ...props }) => (
  <WhatsHot>
    {mixes.slice(0, 4).map(mix => (
      <Mix {...props} {...mix} />
    ))}
  </WhatsHot>
);

export default connect(state => state)(Home);
