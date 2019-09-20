import React, { Component } from "react";
import differenceInDays from "date-fns/differenceInDays";
import parseISO from "date-fns/parseISO";
import Stat from "./Stat";

class Show extends Component {

  render() {
    const { match, mixes } = this.props;
    const [mix = {}] = mixes.filter(mix => mix.slug === match.params.slug);

    return (
      <div className="ph3 ph4-l mb5 tc">
        <div className="measure center lh-copy">
          <h1 className="f3 biryani-black ttu">{mix.name}</h1>
          <p>{mix.description}</p>
          <Stat
            statName="Played"
            statNumber={mix.play_count}
            statWord="Times"
          />
          <Stat
            statName="Uploaded"
            statNumber={differenceInDays(new Date(), parseISO(mix.created_time))}
            statWord="Days ago"
          />
          <Stat
            statName="Loved by"
            statNumber={mix.favorite_count}
            statWord="People"
          />
        </div>
      </div>
    );
  }
}

export default Show;
