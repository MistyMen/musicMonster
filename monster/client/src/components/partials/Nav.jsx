import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li>|||</li>
          <li><Link to="/">Music Monster</Link></li>
          <li>Profile</li>
        </ul>
      </nav>
      )
  }
}

export default Nav;
