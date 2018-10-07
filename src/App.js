import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import * as routes from './constants/routes';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Music from './components/Music';
import Events from './components/Events';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="router-container">
              <NavBar />
              <Switch>
                <Route exact path={routes.HOME} component={() => <Home />} />
                <Route path={routes.GALLERY} component={() => <Gallery />} />
                <Route path={routes.MUSIC} component={() => <Music />} />
                <Route path={routes.EVENTS} component={() => <Events />} />
                <Route path={routes.CONTACT} component={() => <Contact />} />
                <Route component={() => <NotFound />} />
              </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
