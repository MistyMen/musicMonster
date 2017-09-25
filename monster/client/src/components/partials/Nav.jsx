import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class Nav extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li>
          <div className="buttons">
            <Menu width={ '20%' }>
              <a id="Home" className="menu-item" href="/">Home</a>
              <a id="Results" className="menu-item" href="/results">Results</a>
              <a id="User" className="menu-item" href="/">User</a>
            </Menu>
            </div>
          </li>
          <span className="logo"><li>Music Monster</li></span>
          <span className="logo"><li>Profile</li></span>
        </ul>
      </nav>
    );
  }
}

export default Nav;
