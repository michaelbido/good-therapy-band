import React, { Component } from 'react';

import CircleProfiles from './CircleProfile';

import '../css/Home.css'

const bandMembers = [
  {
    name: "David",
    img: require("../images/profiles/david.jpg")
  },
  {
    name: "Sara",
    img: require("../images/profiles/sara.jpg")
  },
  {
    name: "Donna",
    img: require("../images/profiles/donna.jpg")
  },
  {
    name: "Arthur",
    img: require("../images/profiles/arthur.jpg")
  },
  {
    name: "Chuck",
    img: require("../images/profiles/chuck.jpg")
  },
]

class Home extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="home">
        <div className="flex-container">
          <div className="band-name-container">
            <h2>Good Therapy</h2>
            <p>through soft classic rock</p>
          </div>
          <div className="social-container">
            <p>Like us on &nbsp;
              <a href="https://www.facebook.com/Goodtherapyband" rel="noopener noreferrer" target="_blank">Facebook</a>
            </p>
            <iframe id="facebook_iframe" className="facebook_iframe"></iframe>
          </div>
        </div>
        <div className="hero-banner">
          <div className="hero-content-container">
            <p id="quote-text"> Keep on rockin' in the free world.</p>
            <p id="quote-author">- Neil Young</p>
          </div>
        </div>
        <CircleProfiles band={bandMembers} />
      </div>
    )
  }
}

export default Home;

//<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGoodtherapyband%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=280016605231" width="340" height="214" style={{overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>


