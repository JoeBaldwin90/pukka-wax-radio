import React from 'react';
import FeaturedMix from './FeaturedMix';
import Header from "./Header";

function App() {
  return (
    <div>
      <div className="flex-l justify-end">
        <FeaturedMix />
        <div  className="w-50-l relative z-1">
          <Header />
          {/* Routed page */}
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
      ></iframe>
    </div>
  );
}

export default App;
