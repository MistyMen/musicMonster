import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
// import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
        <footer>
        <div className="credit">~ By MistyMen</div>
        <div className="about">
          <a href="https://github.com/MistyMen/musicMonster">About Us</a>
        </div>
      </footer>
      )
  }
}

export default Nav;