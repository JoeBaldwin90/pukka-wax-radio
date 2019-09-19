import React from "react";

const Stat = ({ statName, statNumber, statWord }) => (
  <div
    className="w-third tc pa3 ba bw2 b--light-gray"
    style={{ marginRight: -2 }}
  >
    <div className="f6 biriyani ttu">{statName}</div>
    <div className="f5 biryani-black ttu tracked">
      {statNumber} {statWord}
    </div>
  </div>
);

const About = ({ mixes }) => (
  <div className="ph3 ph4-l">
    <div className="biryani measure center lh-copy f4 ph3 mb3">
      <p className="mt0 mb3">
        Whether you're from Sunderland, Somalia or the Sombrero Galaxy, we'll
        get you in the mood for dancing. Our rhythms permeate space, time and
        culture.
      </p>
      <p className="mt0">Pukka Wax Radio. Universal vibes.</p>
    </div>
    <div className="flex pt3">
      <Stat statName="Featuring" statNumber={mixes.length} statWord="Mixes" />
      <Stat statName="Playtime" statNumber={Math.floor(mixes.reduce((accumulator, current) => accumulator + current.audio_length, 0)/60)} statWord="Hours" />
      <Stat statName="Plays" statNumber={mixes.reduce((accumulator, current) => accumulator + current.play_count, 0)} statWord="" />
    </div>
  </div>
);

export default About;
