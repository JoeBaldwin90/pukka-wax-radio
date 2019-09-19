import React from "react";

const Stats = ({ ...props }) => (
  <div className="tc pa3 ba bw2 b--light-gray flex">
    {/* Mix count */}
    <div className="w-third">
      <p className="b ttu f6 biriyani">Mixes</p>
      <p>{props.mixes.length}</p>
    </div>
    {/* Play count */}
    <div className="w-third">
      {" "}
      <p className="b ttu f6 biriyani">Plays</p>
      <p>
        {props.mixes
          .map(mix => {
            return mix.play_count;
          })
          .reduce((a, b) => a + b, 0)}
      </p>
    </div>
    {/* Play time */}
    <div className="w-third">
      <p className="b ttu f6 biriyani">Boogie time</p>
      <p>
        {Math.floor(
          props.mixes
            .map(mix => {
              return mix.audio_length / 60;
            })
            .reduce((a, b) => a + b, 0)
        )}
      </p>
    </div>
  </div>
);

export default Stats;
