import React, { Component } from 'react';

import '../css/Events.css'

const loading = require("../images/loading-spin-min.gif");

class Events extends Component {

  constructor(props) {
    super();
    this.state = {
      loadFbEvents: false,
    }
  }

  singleEvent = (date, title, location, index) => {
    return (
      <div className="event" key={index}>
        <h2 className="date-container">{date}</h2>
        <h2>{title}</h2>
        <p>{location}</p>
      </div>
    )
  }

  render() {

    if (this.state.loadFbEvents) {
      return (
        <div className="events-container">
          <h2>Events</h2>
          <p>Like and Follow us on Facebook to keep track of our Events!</p>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgoodtherapyband%2F&tabs=events&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=266877780635149" width="100%" height="500px" style={{border: 'none', overflow:'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      )
    }
    
    else if (this.props.data == null) {
      return (
        <div className="events-container">
          <h2>Events</h2>
          <img src={loading} alt="loading gif"/>
        </div>
      )
    }

    else {
      return (
        <div className="events-container">
          <h2>Events</h2>
          {
            this.props.data.data.info.map((data, index) => {
              return this.singleEvent(data.date, data.title, data.location, index)
            })
          }
        </div>
      )
    }
  }
}

export default Events;