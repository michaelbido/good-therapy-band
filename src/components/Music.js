import React, { Component } from 'react';

import '../css/Music.css'

const loading = require("../images/loading-spin-min.gif");

class Music extends Component {
  render() {
    return (
      <div className="music-container">
        <h2>Music</h2>
        <div className="iframe-wrapper">
          <iframe title="Full Band - I Was Born This Way" width="560" height="340" src="https://www.youtube-nocookie.com/embed/vis62k_rM-w?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="iframe-wrapper">
          <iframe title="Trio - Billie Jean" width="560" height="340" src="https://www.youtube-nocookie.com/embed/thF-3mbPiSk?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="iframe-wrapper">
          <iframe title="Trio - Life by the Drop" width="560" height="340" src="https://www.youtube-nocookie.com/embed/u2LPNfbARpI?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="iframe-wrapper">
          <iframe title="Trio - 455 Rocket" width="560" height="340" src="https://www.youtube-nocookie.com/embed/bB34C9q3FDc?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

export default Music;