import React, { Component } from 'react';

import '../css/Music.css'

const loading = require("../images/loading-spin-min.gif");

class Music extends Component {
  render() {
    return (
      <div className="music-container">
        <h2>Music</h2>
        <div className="music-links">
          <a className="music-link__item" href="#band">
            <h3>Band</h3>
          </a>
          <a className="music-link__item" href="#trio"> 
            <h3>Trio</h3>
          </a>
        </div>
        <div className="music-section" id="band">
          <hr />
          <h3>Band</h3>
          <div className="iframe-wrapper">
            <iframe title="Band - I Feel Lucky" width="560" height="340" src="https://www.youtube-nocookie.com/embed/0xZn-Fq03yY?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div className="iframe-wrapper">
            <iframe title="Band - Ain't No Sunshine" width="560" height="340" src="https://www.youtube-nocookie.com/embed/FHk2fHLFPD8?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div className="iframe-wrapper">
            <iframe title="Band - Drift Away" width="560" height="340" src="https://www.youtube-nocookie.com/embed/TecHPh_MLSE?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div className="iframe-wrapper">
            <iframe title="Band - 455 Rocket" width="560" height="340" src="https://www.youtube-nocookie.com/embed/ySu85gH-TfQ?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>
        <div className="music-section" id="trio">
          <hr />
          <h3>Trio</h3>
          <div className="iframe-wrapper">
            <iframe title="Trio - Life by the Drop" width="560" height="340" src="https://www.youtube-nocookie.com/embed/u2LPNfbARpI?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div className="iframe-wrapper">
            <iframe title="Trio - 455 Rocket" width="560" height="340" src="https://www.youtube-nocookie.com/embed/bB34C9q3FDc?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div className="iframe-wrapper">
            <iframe title="Trio - Billie Jean" width="560" height="340" src="https://www.youtube-nocookie.com/embed/thF-3mbPiSk?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Music;