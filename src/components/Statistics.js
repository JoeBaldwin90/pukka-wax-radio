import React from "react";
import styled from "styled-components";
import Stat from "./Stat";

const StatsContainer = styled.section`
  text-align: center;
  padding: 0 1em 0 1em;
`;

export default ({ mixes }) => (
  <StatsContainer>
    <Stat statName="Featuring" statNumber={mixes.length} statWord="Mixes" />
    <Stat
      statName="Playtime"
      statNumber={Math.floor(
        mixes.reduce(
          (accumulator, current) => accumulator + current.audio_length,
          0
        ) / 60
      )}
      statWord="Hours"
    />
    <Stat
      statName="Played"
      statNumber={mixes.reduce(
        (accumulator, current) => accumulator + current.play_count,
        0
      )}
      statWord="Times"
    />
  </StatsContainer>
);
