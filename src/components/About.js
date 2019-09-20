import React from "react";
import Stat from "./Stat";

const About = ({ mixes }) => (
  <div className="ph3 ph4-l biryani measure center mb5">
    <div className="lh-copy f4 ph3 mb3 tc">
      <p className="mt0 mb4">
        Whether you're from Sunderland, Somalia or the Sombrero Galaxy, we'll
        get you in the mood for dancing. Our rhythms permeate space, time and
        culture.
      </p>
      <p className="mt0">Pukka Wax Radio. Universal vibes.</p>
    </div>
    <div className="">
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
    </div>
  </div>
);

export default About;
