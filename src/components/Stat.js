import React from "react";
import Counter from "./Counter";

const Stat = ({ statName, statNumber, statWord }) => (
  <div className="tc pa3 mt3">
    <div className="f6 biryani-black ttu ">{statName}</div>
    <div className="f5 biryani ttu tracked">
      <Counter end={statNumber} /> 
      {statWord}
    </div>
  </div>
);


export default Stat;