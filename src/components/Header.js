import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  margin-bottom: 4em;
  padding-top: 4em;
`;

const PukkaTitle = styled.h1`
  font-family: "Anton", sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  text-decoration: none;

  @media (min-width: 30em) {
    letter-spacing: 0.25em;
  }
`;

const LinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

const ListEl = ({ key, children }) => (
  <li key={key} className="mh2">
    {children}
  </li>
);

const Link = ({ to, className, children }) => (
  <NavLink exact to={to} className={className}>
    {children}
  </NavLink>
);

const StyledLink = styled(Link)`
  font-family: "Biryani", sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: solid 3px rgba(0, 0, 0, 0);
  color: #777;
  transition: color 0.15s ease-in;

  :hover {
    color: #000;
  }
`;

export default () => (
  <Header>
    <Link to="/" className="link black">
      <PukkaTitle>Pukka Wax Radio</PukkaTitle>
    </Link>

    <nav>
      <LinksContainer>
        <ListEl key="1">
          <StyledLink to="/">What's Hot</StyledLink>
        </ListEl>
        <ListEl key="2">
          <StyledLink to="/archive">Archive</StyledLink>
        </ListEl>
        <ListEl key="3">
          <StyledLink to="/about">About</StyledLink>
        </ListEl>
      </LinksContainer>
    </nav>
  </Header>
);
