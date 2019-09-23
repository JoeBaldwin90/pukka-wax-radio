import React from "react";
import { connect } from "react-redux";
import actions from "../store/actions";
import classNames from "classnames"

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
    className={classNames({
      // Classname varables
      [className]: className,
      playing: id === currentMix && playing && fromMixcloud,
      loading: id === currentMix && !playing && !fromMixcloud
    })}
    onClick={() => playMix({ currentMix: id, fromMixcloud: false })}
  >
    {children}
  </div>
);

export default connect(state => state, actions)(PlayMix);