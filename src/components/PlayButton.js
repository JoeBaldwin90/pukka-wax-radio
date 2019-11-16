import React, { Fragment } from "react";
import styled from "styled-components";
import PlaySvg from "../images/play.svg";

const Play = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

  background-color: #fd9427;
  border-radius: 100%;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  min-width: 50px;
  height: 50px;
  background-image: url(${PlaySvg});
  background-size: 25% !important;
  background-repeat: no-repeat;
  background-position: center center;
  background-position-x: 55%;

  &:hover {
    box-shadow: 0 0 0.5rem rgba(50, 50, 50, 0.25);
    transform: scale(1.25);
  }
`;

export default () => (
  <Fragment>
    <Play className="play-button"></Play>
  </Fragment>
);
