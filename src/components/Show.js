import React, {Component} from "react";
import { connect } from "react-redux";
import actions from "../store/actions"
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

class Show extends Component {
  componentDidMount() {
    const {setFeaturedMix, id} = this.props
    setFeaturedMix(id)
  }

  componentWillUnmount() {
    const { setFeaturedMix } = this.props;
    setFeaturedMix(false);
  }

  render() {
    const {tags, description, play_count, created_time, name, favorite_count} = this.props;
    return (
      <div className="ph3 ph4-l mb5 tc">
        <div className="measure center lh-copy">
          <h1 className="f3 biryani-black ttu">{name}</h1>
          <Tags tags={tags} />
          <p>{description}</p>
          <Stat statName="Played" statNumber={play_count} statWord="Times" />
          <Stat
            statName="Uploaded"
            statNumber={differenceInDays(new Date(), parseISO(created_time))}
            statWord="Days ago"
          />
          <Stat
            statName="Loved by"
            statNumber={favorite_count}
            statWord="People"
          />
        </div>
      </div>
    );
  }
}

// Selector - grab data from state
const getMix = (mixes, slug) => {
  const [mix = {}] = mixes.filter(mix => mix.slug === slug);
  return mix;
};

export default connect(
  (state, props) => ({
    ...getMix(state.mixes, props.match.params.slug)
  }),
  actions
)(Show);
