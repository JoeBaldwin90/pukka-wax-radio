import React from "react";
import PlayButton from "./PlayButton"

const Archive = ({ mixes, ...props }) => (
  <ul className="list pl0 archive">
    {mixes.map(mix => (
        <li className="ph3 ph4-l">
          <div className="pv3 bb b--light-gray flex justify-between items-center">
            <h1 className="f6 mv0 black b ttu biriyani pr3">{mix.name}</h1>
            <PlayButton />
          </div>
        </li>
    ))}
  </ul>
);

export default Archive;
