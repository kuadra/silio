import React, {Component} from 'react';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/modelview"> Model</a></li>
          <li><a href="/login"> login</a></li>
          <li><a href="/logout"> logout</a></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
