/*global Mixcloud*/
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";

class Player extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!nextProps.widgetReady) {
      return;
    }

    if (nextProps.currentMix !== this.props.currentMix) {
      this.widget.load(nextProps.currentMix, true);
      this.mountAudio()
    } else if (!nextProps.fromMixcloud) {
      this.widget.togglePlay();
    }
  }

  mountAudio = async () => {
    const { playMix, setWidgetReady } = this.props;

    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    
    setWidgetReady(true);

    await this.widget.events.pause.on(() => {
      playMix({
        playing: false,
        fromMixcloud: true
      });
    });
    
    await this.widget.events.play.on(() => {
      playMix({
        playing: true,
        fromMixcloud: true
      });
    });
  };

  componentDidMount() {
    this.mountAudio();
  }

  actions = {
    togglePlay: () => {
      this.widget.togglePlay();
    },
    playMix: mixName => {
      const { currentMix } = this.state;
      if (mixName === currentMix) {
        // Stop running function if this condition is met
        return this.widget.togglePlay();
      }
      this.setState({
        currentMix: mixName
      });
      this.widget.load(mixName, true); // Load new mix from Mixcloud mix URL, play on load.
    }
  };

  render() {
    return (
      <div>
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
    );
  }
}

export default connect(
  state => state,
  actions
)(Player);
