import React from "react";
import Mix from "./Mix";

const Home = props => (
  <div className="flex flex-wrap justify-between ph3 ph4-l mixes">
    <div className="mix mb4">
      <Mix
        name="Awesome Tapes From Africa"
        id="/jetsetwithdjmrnick/almost-all-africa-live-at-bevy/"
        {...props}
      />
    </div>

    <div className="mix mb4">
      <Mix
        name="Somali Mixtape"
        id="/djobruni/hijack-somali-mix-tape/"
        {...props}
      />
    </div>

    <div className="mix mb4">
      <Mix
        name="Church of Sound"
        id="/worldwidefm/church-of-sound-indian-classical-special-24-01-18/"
        {...props}
      />
    </div>

    <div className="mix mb4">
      <Mix
        name="Total Refreshment Centre 2017"
        id="/cedric-lassonde/november-2017-the-total-refreshment-centre/"
        {...props}
      />
    </div>
  </div>
);

export default Home;