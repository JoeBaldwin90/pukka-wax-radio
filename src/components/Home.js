import React from "react";
import Mix from "./Mix";

const Home = ({ mixes, ...props }) => (
  <div className="flex flex-wrap justify-between ph3 ph4-l mixes">
    {/* Map over all of the mixes */}
    {mixes.slice(0,4).map(mix => (
      <div className="mix mb5">
        <Mix {...props} {...mix} id={mix.key} />
      </div>
    ))}
  </div>
);

export default Home;