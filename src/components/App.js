/*global Mixcloud*/
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FeaturedMix from './FeaturedMix';
import Header from "./Header";

const Home = () => <h1>Home</h1>;
const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

class App extends Component {

  mountAudio = async() => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready
    await this.widget.play()
    console.log(this.widget)
  }

  componentDidMount() {
    this.mountAudio()
  }

  togglePlay = () => {
    console.log('togglePlay')
    this.widget.togglePlay()
  }

  render() {
      return (
        <Router>
          <div>
            <div className="flex-l justify-end">
              <FeaturedMix />
              <div className="w-50-l relative z-1">
                <Header />
                {/* Routed page */}
                <div>
                  <button onClick={this.togglePlay}>
                    Play/Pause
                  </button>
                </div>
                <Route exact path="/" component={Home} />
                <Route path="/archive" component={Archive} />
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
