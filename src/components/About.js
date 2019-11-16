import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Statistics from "./Statistics";

const AboutContainer = styled.section`
  padding: 0 1em;
  font-family: "Biryani", sans-serif;
  max-width: 30em;
  margin: 0 auto;
  margin-bottom: 4em;

  @media (min-width: 60em) {
    padding-left: 2em;
    padding-right: 2em;
  }
`;

const AboutCopy = styled.div`
  text-align: center;
  margin-bottom: 1em;
  padding: 0 1em;
  line-height: 1.5;
`;

const AboutParagraph = styled.p`
  margin: 0 0 1.5em 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const About = ({ mixes }) => (
  <AboutContainer>
    <AboutCopy>
      <AboutParagraph>
        Whether you're from Sunderland, Somalia or the Sombrero Galaxy, we'll
        get you in the mood for dancing. Our rhythms permeate space, time and
        culture.
      </AboutParagraph>
      <AboutParagraph>Pukka Wax Radio. Universal vibes.</AboutParagraph>
    </AboutCopy>

    <Statistics mixes={mixes} />
  </AboutContainer>
);

export default connect(state => state)(About);
