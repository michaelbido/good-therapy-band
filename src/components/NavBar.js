import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import '../css/NavBar.css'

class NavBar extends Component {

  constructor() {
    super();
    this.state = { width: 0, height: 0, afterMobileRender: false, isVertical: true };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  didRotate = () => {
    if (window.innerHeight < window.innerWidth && this.state.isVertical) {
      this.setState({isVertical: false});
      // console.log("rotate sideways detected");
      return true;
    }

    if (window.innerHeight > window.innerWidth && !this.state.isVertical) {
      this.setState({isVertical: true});
      // console.log("rotate vert detected");
      return true;
    }
    return false;
  }

  updateWindowDimensions() {
    if (this.didRotate() || window.innerWidth <= 480 === false || !this.state.afterMobileRender) {
      this.setState({ width: window.innerWidth, height: window.innerHeight, afterMobileRender: true });
    }
  }

  scrollUnder = () => {
    document.getElementById("above-content").scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  render() {
    return (
      <div className="navbar-wrapper" >
        <div className="navbar" style={{ height: this.state.height, width: this.state.width}}>
          <Link to={routes.HOME}> 
            <img className="nav-logo" src={require('../images/good-therapy-band-logo-white.png')} alt="logo"/>
          </Link>
          <div className="menu" id="above-content">
            <Link to={routes.HOME}><button onClick={() => this.scrollUnder()}>Home</button></Link>
            <Link to={routes.GALLERY}><button onClick={() => this.scrollUnder()}>Gallery</button></Link>
            <Link to={routes.MUSIC}><button onClick={() => this.scrollUnder()}>Music</button></Link>
            <Link to={routes.EVENTS}><button onClick={() => this.scrollUnder()}>Events</button></Link>
            <Link to={routes.CONTACT}><button onClick={() => this.scrollUnder()}>Contact</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;