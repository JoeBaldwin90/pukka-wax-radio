import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import GlobalStyles from "../theme/globalStyles";

import FeaturedMix from "./FeaturedMix";
import Header from "./Header";
import Home from "./Home";
import Archive from "./Archive";
import About from "./About";
import Show from "./Show";
import Player from "./Player";
import mixesData from "../data/mixes";
import actions from "../store/actions";

const AppContainer = styled.main`
  justify-content: flex-end;

  @media (min-width: 60em) {
    display: flex;
  }
`;

const PageDivider = styled.section`
  position: relative;
  z-index: 1;
  
  @media (min-width: 60em) {
    width: 50%;
  }
`;

class App extends Component {
  fetchMixes = async () => {
    const { addMix } = this.props;

    mixesData.map(async id => {
      try {
        const response = await fetch(`https://api.mixcloud.com/${id}`);
        const data = await response.json();
        addMix(data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  componentDidMount() {
    this.fetchMixes();
  }

  render() {
    return (
      <Router>
        <GlobalStyles />
        <AppContainer>
          <FeaturedMix />
          <PageDivider>
            <Header />
            {/* Routed pages */}
            <Route exact path="/" component={Home} />
            <Route path="/archive" component={Archive} />
            <Route path="/about" component={About} />
            <Route path="/show/:slug" component={Show} />
          </PageDivider>
        </AppContainer>
        <Player />
      </Router>
    );
  }
}

export default connect(state => state, actions)(App);
