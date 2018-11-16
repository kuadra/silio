import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';
import Canvas from './Canvas.js';
//import Button from './Button.js';
import Model from './Model.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	<Header />
        <Router>
          <div className="mainContainer">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Canvas} />
              <Route path="/bikeModel" component={Model} />
            </Switch>
          </div>
        </Router>
        <Footer id="footer" />
      </div>
    );
  }
}

export default App;
