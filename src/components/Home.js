import React from "react";
import Mix from "./Mix";

const Home = props => (
  <div className="flex flex-wrap justify-between ph3 ph4-l mixes">
   
    {/* If we have a mix object in the props, render it out */}
    {props.mix && (
      <div className="mix mb4">
        <Mix
          name={props.mix.name}
          id={props.mix.key}
          {...props}
        />
      </div>
    )}

  </div>
);

export default Home;