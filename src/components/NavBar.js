import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import '../css/NavBar.css'

class NavBar extends Component {

  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar">
          <Link to={routes.HOME}> 
            <img className="nav-logo" src={require('../images/good-therapy-band-logo-white.png')} alt="logo"/>
          </Link>
          <Link to={routes.HOME}><button>Home</button></Link>
          <Link to={routes.GALLERY}><button>Gallery</button></Link>
          <Link to={routes.MUSIC}><button>Music</button></Link>
          <Link to={routes.EVENTS}><button>Events</button></Link>
          <Link to={routes.CONTACT}><button>Contact</button></Link>
        </div>
        <div className="navbar-fade"></div>
      </div>
    )
  }
}

export default NavBar;