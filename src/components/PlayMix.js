import React from "react";
import { connect } from "react-redux";
import actions from "../store/actions";

const PlayMix = ({
  playMix,
  id,
  currentMix,
  playing,
  children,
  fromMixcloud,
  className
}) => (
  <div
    className={`${className} ${id === currentMix && playing && "playing"}`}
    onClick={() => playMix({ currentMix: id, fromMixcloud: false })}
  >
    {children}
  </div>
);

export default connect(state => state, actions)(PlayMix);