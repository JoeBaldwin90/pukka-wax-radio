import React from "react";
import { connect } from "react-redux";
import differenceInDays from "date-fns/differenceInDays";
import parseISO from "date-fns/parseISO";
import Stat from "./Stat";

const Tag = ({ name, url }) => (
  <div className="mr2 mb2 o-70">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block f6 link blue b ba bw1 b--blue br2 pv1 ph2 lh-title"
    >
      {name}
    </a>
  </div>
);

const Tags = ({ tags = [] }) => (
  <div className="tags flex flex-wrap justify-center pt3 mb3">
    {tags.map(tag => (
      <Tag {...tag} />
    ))}
  </div>
);

const Show = ({ mix }) => (
  <div className="ph3 ph4-l mb5 tc">
    <div className="measure center lh-copy">
      <h1 className="f3 biryani-black ttu">{mix.name}</h1>
      <Tags tags={mix.tags} />
      <p>{mix.description}</p>
      <Stat statName="Played" statNumber={mix.play_count} statWord="Times" />
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

// Selector - grab data from state
const getMix = (mixes, slug) => {
  const [mix = {}] = mixes.filter(mix => mix.slug === slug);
  return mix
};

export default connect((state, props) => ({
  state,
  mix: getMix(state.mixes, props.match.params.slug)
}))(Show);
