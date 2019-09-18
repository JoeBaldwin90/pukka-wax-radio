import React from "react";
import Mix from "./Mix";

const Home = props => (
  <div className="flex flex-wrap justify-between ph3 ph4-l mixes">
    <div className="mix mb4">
      <Mix name="Awesome Tapes" />
    </div>
    <div className="mix mb4">
      <Mix name="NTS" />
    </div>
    <div className="mix mb4">
      <Mix name="BCR" />
    </div>
    <div className="mix mb4">
      <Mix name="Music" />
    </div>
  </div>
);

export default Home;