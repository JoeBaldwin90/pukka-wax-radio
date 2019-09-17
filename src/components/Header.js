import React from "react";

const Header = props => (
  <header className="black mb5 pt5">
    <h1 className="ttu f3 tracked-mega-ns anton tc mt0 mb3">Pukka Wax Radio</h1>

    <nav>
      <ul className="list flex justify-center">
        <li className="mh2">
          <a className="nav-link link biriyani-black f6 ttu gray active">
            Selekta
          </a>
        </li>
        <li className="mh2">
          <a className="nav-link link biriyani-black f6 ttu gray">
            Vaults
          </a>
        </li>
        <li className="mh2">
          <a className="nav-link link biriyani-black f6 ttu gray">
            Scripture
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
