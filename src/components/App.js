/*global Mixcloud*/
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import FeaturedMix from "./FeaturedMix";
import Header from "./Header";
import Home from "./Home";
import Archive from "./Archive";
import About from "./About";
import Show from "./Show";

import mixesData from "../data/mixes";
import actions from "../store/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: "",
      mix: null
    };
  }

  fetchMixes = async () => {

    const {addMix} = this.props

    mixesData.map(async id => {
      try {
        const response = await fetch(`https://api.mixcloud.com/${id}`);
        const data = await response.json();
        addMix(data)
      } 
      catch (error) {
        console.log(error);
      }
    });
  };

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    
    await this.widget.events.pause.on(() => {
      this.setState({ playing: false });
    });
    await this.widget.events.play.on(() => {
      this.setState({ playing: true });
    });
  };

  componentDidMount() {
    this.mountAudio();
    this.fetchMixes();
  }

  actions = {
    togglePlay: () => {
      this.widget.togglePlay();
    },
    playMix: mixname => {
      const { currentMix } = this.state;
      if (mixname === currentMix) {
        // Stop running function if this condition is met
        return this.widget.togglePlay();
      }
      this.setState({
        currentMix: mixname
      });
      this.widget.load(mixname, true); // Load new mix from Mixcloud mix URL, play on load.
      this.mountAudio();
    }
  };

  render() {

    // Grab first item in mixes array (destructuring). Empty object if no value.
    const [firstMix = {}] = this.props.mixes

    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix
              {...this.state}
              {...this.actions}
              {...firstMix}
              id={firstMix.key}
            />
            <div className="w-50-l relative z-1">
              <Header />
              {/* Routed pages */}
              <Route exact path="/" component={Home} />
              <Route path="/archive" component={Archive} />
              <Route path="/about" component={About} />
              <Route path="/show/:slug" component={Show} />
                )}
              />
            </div>
          </div>
          {/* Audio player */}
          <iframe
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=%2Fstampthewax%2Fupside-down-a-fela-kuti-tribute-mix-by-rich-medina%2F"
            frameBorder="0"
            title="Fela Kuti mix"
            className="player db fixed bottom-0 z-999"
            ref={player => (this.player = player)}
          ></iframe>
        </div>
      </Router>
    );
  }
}

export default connect(state => state, actions)(App);
