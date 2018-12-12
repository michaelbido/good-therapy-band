import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

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
  constructor() {
    super();
    this.state = {
      sdkActive: false,
      eventData: null
    }
  }

  componentWillMount() {
    axios.get('/api/events')
      .then((res) => {
        this.setState({eventData: res.data});
        console.log("Data Fetched");
        // console.log(res);
      })
      .catch((err) => {
        console.log("Error Fetching Data")
        // console.log(err);
      })
  }

  sdkStatusUpdate = () => {
    console.log('inapp')
    if (!this.state.sdkActive) {
      this.setState({sdkActive: true});
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="router-container">
              <NavBar />
              <Switch>
                <Route exact path={routes.HOME} component={() => 
                  <Home updateStatus={() => this.sdkStatusUpdate()} sdkStatus={this.state.sdkActive}/>}
                />
                <Route path={routes.GALLERY} component={() => <Gallery />} />
                <Route path={routes.MUSIC} component={() => <Music />} />
                <Route path={routes.EVENTS} component={() => 
                  <Events data={this.state.eventData}/>} 
                />
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
