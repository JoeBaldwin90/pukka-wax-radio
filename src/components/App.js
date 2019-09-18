/*global Mixcloud*/
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FeaturedMix from "./FeaturedMix";
import Header from "./Header";
import Home from "./Home";

const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

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
    try {
      const response = await fetch("https://api.mixcloud.com/jetsetwithdjmrnick/almost-all-africa-live-at-bevy/")
      const data = await response.json()
      this.setState({
        mix: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    console.log(this.widget);
    await this.widget.play(); // 2018+ broswers don't support this functionality.
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
      console.log("togglePlay");
      this.widget.togglePlay();
    },
    playMix: mixname => {
      const {currentMix} = this.state
      if (mixname === currentMix) {
        // Stop running function if this condition is met
        return this.widget.togglePlay()
      }
      this.setState({
        currentMix: mixname
      });
      this.widget.load(mixname, true); // Load new mix from Mixcloud mix URL, play on load.
      this.mountAudio();
    }
  };

  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              <Header />
              {/* Routed page */}
              <Route
                exact
                path="/"
                component={() => <Home {...this.state} {...this.actions} />}
              />
              <Route
                path="/archive"
                component={() => <Archive {...this.state} {...this.actions} />}
              />
              <Route path="/about" component={About} />
            </div>
          </div>
          {/* Audio player */}
          <iframe
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=%2Fstampthewax%2Fupside-down-a-fela-kuti-tribute-mix-by-rich-medina%2F"
            frameBorder="0"
            title="Fela Kuti mix"
            className="player db fixed bottom-0 z-10"
            ref={player => (this.player = player)}
          ></iframe>
        </div>
      </Router>
    );
  }
}

export default App;
