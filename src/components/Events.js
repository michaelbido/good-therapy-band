import React, { Component } from 'react';

import '../css/Events.css'

const loading = require("../images/loading-spin-min.gif");

class Events extends Component {

  constructor(props) {
    super();
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
    
    if (this.props.data == null) {
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