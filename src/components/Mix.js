import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import PlayMix from "./PlayMix";

const HomepageMixContainer = styled.div`
  width: calc(100% - 2em);
  margin: 0 auto 2em auto;

  @media (min-width: 30em) {
    width: calc(50% - 2em);
    margin-bottom: 4em;

    &:nth-of-type(even) {
      transform: translateY(4rem);
    }
  }
`;

const MixBackground = styled.div`
  height: 0;
  position: relative;
  padding-bottom: 133.33%;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center center;
`;

const MixOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2em 1em;
  z-index: 100;

  :after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  }
`;

const MixTitle = styled.h2`
  font-family: "Biryani", sans-serif;
  font-size: 1.5em;
  line-height: 1.2;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  padding-right: 0.5em;

  position: relative;
  z-index: 2;
`;

export default ({ name, pictures, slug, id }) => (
  <HomepageMixContainer>
    <MixBackground style={{ backgroundImage: `url(${pictures.extra_large})` }}>
      <MixOverlay>
        <MixTitle>{name}</MixTitle>
        <Link to={`/show/${slug}`} className="absolute absolute--fill z-3" />
        <PlayMix
          id={id}
          className="absolute bottom-1 left-1 z-5 flex items-left"
        >
          <PlayButton />
        </PlayMix>
      </MixOverlay>
    </MixBackground>
  </HomepageMixContainer>
);
