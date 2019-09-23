import React from "react";
import { connect } from "react-redux";
import PlayButton from "./PlayButton";
import PlayMix from "./PlayMix";

const FeaturedMix = ({ name, pictures = {}, ...props }) => (
  <div
    className="w-50-l vh-100 flex items-center justify-center cover bg-center pad-bottom fixed-l left-0 mix-overlay"
    style={{ backgroundImage: `url(${pictures.extra_large})` }}
  >
    <PlayMix {...props}>
      <div className="w-100 tc pa3 relative z-2">
        <p className="b biriyani f6 white ttu">Featured Mix</p>
        <h1 className="f1-ns f2 lh-title mv2 mh5-l anton white ttu">{name}</h1>
        <PlayButton />
      </div>
    </PlayMix>
  </div>
);

// Selector - grab data from state
const getFristMix = (state) => {
  const [featuredMix] = state.mixes.filter(mix => mix.id === state.featuredMix);
  const [firstMix = {}] = state.mixes;
  return featuredMix || firstMix; // Returen featuredMix if exists, else return firstMix
};

export default connect(state => ({ 
  ...getFristMix(state)
}))(FeaturedMix);
