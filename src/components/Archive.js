import React from "react";
import { connect } from "react-redux";
import PlayButton from "./PlayButton"
import PlayMix from "./PlayMix";

const Archive = ({ mixes, ...props }) => (
  <ul className="list pl0 archive mb5">
    {mixes.map(mix => (
      <PlayMix {...props}>
        <li className="ph3 ph4-l">
          <div className="pv3 bb b--light-gray flex justify-between items-center">
            <h1 className="f6 mv0 black b ttu biriyani pr3">{mix.name}</h1>
            <PlayButton />
          </div>
        </li>
      </PlayMix>
    ))}
  </ul>
);

export default connect(state => state)(Archive);
