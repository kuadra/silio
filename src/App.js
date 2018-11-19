import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Sidebar from './Sidebar/Sidebar.js';
import Canvas from './Canvas/Canvas.js';
import ModelView from './ModelView/ModelView.js';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Router>
          <div className="mainContainer">
            <Switch>
              <Route exact path="/" component={Canvas} />
              <Route path="/modelview" component={ModelView} />
            </Switch>
          </div>
        </Router>
        <Footer id="footer" />
      </div>
    );
  }
}

export default App;
