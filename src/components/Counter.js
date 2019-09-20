import React from "react";
import CountUp from "react-countup";

const Counter = ({ end = 0 }) => (
  <div className="f1 orange b lh-solid">
    <CountUp
      start={0}
      end={end}
      delay={0}
      duration={2.75}
      separator={","}
    ></CountUp>
  </div>
);

export default Counter;
