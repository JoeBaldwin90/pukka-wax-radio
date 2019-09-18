import React from "react";
import PlayButton from "./PlayButton";
import PlayMix from "./PlayMix";

const Mix = ({ name, mix, ...props }) => (
  <div
    className="aspect-ratio aspect-ratio--3x4 pointer cover bg-center"
    style={{ backgroundImage: `url(${mix.pictures.extra_large})` }}
  >
    <PlayMix {...props}>
      <div className="ph3 pv4 aspect-ratio--object mix-overlay">
        <div className="flex items-center relative z-2">
          <h1 className="f4 f3-l b mv0 white ttu biryani pr2 lh-title">{name}</h1>
          <PlayButton {...props} />
        </div>
      </div>
    </PlayMix>
  </div>
);

export default Mix;
