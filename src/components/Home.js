import React, { Component } from 'react';

import '../css/Home.css'

class Home extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="home">
        <div>This is a test</div>
        <p>Like us on Facebook!</p>
        <div className="social-container">
          <iframe id="facebook_iframe" className="facebook_iframe"></iframe>
        </div>
      </div>
    )
  }
}

export default Home;

//<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGoodtherapyband%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=280016605231" width="340" height="214" style={{overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>


