import React from "react";
import {NavLink} from "react-router-dom";

const Header = props => (
  <header className="black mb5 pt5">
    <h1 className="ttu f3 tracked-mega-ns anton tc mt0 mb3">Pukka Wax Radio</h1>

    <nav>
      <ul className="list flex justify-center">
        <li className="mh2">
          <NavLink
            exact
            to="/"
            className="nav-link link biriyani-black f6 ttu gray"
          >
            Home
          </NavLink>
        </li>
        <li className="mh2">
          <NavLink
            to="/archive"
            className="nav-link link biriyani-black f6 ttu gray"
          >
            Archive
          </NavLink>
        </li>
        <li className="mh2">
          <NavLink
            to="/about"
            className="nav-link link biriyani-black f6 ttu gray"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
