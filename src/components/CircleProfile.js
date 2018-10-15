import React, { Component } from 'react';

import '../css/CircleProfile.css';

class CircleProfiles extends Component {

  constructor(props) {
    super(props);
    this.singleProfile = this.singleProfile.bind(this);
  }

  singleProfile = (url, name, role, i) => {
    return (
      <div key={i} className="circle-image">
        <img src={url} alt={`Pic of ${name}`} />
        <p>{name}</p>
        <p className="caption">{role}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="circle-container">
      {
        this.props.band.map((member, index) => {
          return this.singleProfile(member.img, member.name, member.role, index);
        })
      }
    </div>
    )
  }
}

export default CircleProfiles;