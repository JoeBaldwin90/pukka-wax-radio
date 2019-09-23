import React from "react";
import { connect } from "react-redux";
import Mix from "./Mix";

const Home = ({ mixes, ...props }) => (
  <div className="flex flex-wrap justify-between ph3 ph4-l mixes">
    {/* Map over all of the mixes */}
    {mixes.slice(0,4).map(mix => (
      <div className="mix mb5">
        <Mix {...props} {...mix} />
      </div>
    ))}
  </div>
);

export default connect(state => state)(Home);