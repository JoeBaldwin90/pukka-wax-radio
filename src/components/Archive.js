import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PlayButton from "./PlayButton"
import PlayMix from "./PlayMix";

const ArchiveContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 4em;
`;

const Mix = styled.li`
  padding: 0 1em;

  @media (min-width: 60em) {
    padding: 0 2em;
  }
`;

const Container = styled.div`
  padding: 1em 0;
  border-bottom: solid 1px lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MixTitle = styled.h3`
  font-family: "Work Sans";
  font-size: 0.875em;
  font-weight: 700;
  text-transform: uppercase;
  padding-right: 1em;
  color: #000;
  width: 100%;
`;

const Archive = ({ mixes }) => (
  <ArchiveContainer>
    {mixes.map((mix, i) => (
      <PlayMix id={mix.id} key={i}>
        <Mix key={i}>
          <Container>
            <MixTitle>{mix.name}</MixTitle>
            <PlayButton />
          </Container>
        </Mix>
      </PlayMix>
    ))}
  </ArchiveContainer>
);

export default connect(state => state)(Archive);
