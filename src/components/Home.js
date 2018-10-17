import React, { Component } from 'react';

import CircleProfiles from './CircleProfile';

import '../css/Home.css'

const bandMembers = [
  {
    name: "David Huffman",
    role: "Guitar / Harmonica / Vocals",
    img: require("../images/profiles/david.jpg")
  },
  {
    name: "Sara Pray",
    role: "Guitar / Vocals",
    img: require("../images/profiles/sara.jpg")
  },
  {
    name: "Donna Ezzell",
    role: "Vocals / Flute / Percussion",
    img: require("../images/profiles/donna.jpg")
  },
  {
    name: "Arthur Hamilton",
    role: "Bass",
    img: require("../images/profiles/arthur.jpg")
  },
  {
    name: "Chuck Geisel",
    role: "Drums",
    img: require("../images/profiles/chuck.jpg")
  },
]

class Home extends Component {

  constructor(props) {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    // const doUpdate = () => {
    //   window.FB.XFBML.parse();
    // }
    
    // window.fbAsyncInit = function() {
    //   window.FB.init({
    //     appId: "266877780635149",
    //     xfbml            : true,
    //     version          : 'v3.1'
    //   });
    // };

    // if (!this.props.sdkStatus) {
    //   if (typeof window.FB !== 'undefined') {
    //     this.props.updateStatus();
    //   }
    // }

    // if (this.props.sdkStatus) {
    //   doUpdate();
    //   console.log("it happened");
    // }
    
  }


  render() {
    return (
      <div className="home" id="home_id">
        <div className="flex-container">
          <div className="band-name-container">
            <h2>Good</h2>
            <h2>Therapy</h2>
            <hr />
            <p>classical</p>
            <p>rock</p>
          </div>
          <div className="social-container">
            <p>Like us on Facebook </p>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGoodtherapyband%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=280016605231" width="340" height="214" style={{overflow:'hidden'}} frameBorder="0" allowtransparency="true" allow="encrypted-media" title="GT Facebook Plugin"></iframe>
          </div>
        </div>
        <div className="hero-banner">
          <div className="hero-content-container">
            <p id="quote-text"> Keep on rockin' in the free world.</p>
            <p id="quote-author">- Neil Young</p>
          </div>
        </div>
        <div>
          <div className="band-description">
            <h2>Meet the band</h2>
            <p>from the heart of texas</p>
          </div>
          <CircleProfiles band={bandMembers} />
        </div>
      </div>
    )
  }
}

export default Home;

//             <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGoodtherapyband%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=280016605231" width="340" height="214" style={{overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
//             <div className="fb-page" data-href="https://www.facebook.com/goodtherapyband/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/goodtherapyband/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/goodtherapyband/">Good Therapy</a></blockquote></div>
