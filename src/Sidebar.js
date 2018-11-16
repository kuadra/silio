import React, {Component} from 'react';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/bikemodel">Model</a></li>
          <li><a href="index.html?contacts">contacts</a></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
