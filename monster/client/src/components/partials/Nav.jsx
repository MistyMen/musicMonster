import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
// import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <header>
        <div className="menu">| | |</div>
        <div className="reg">
          <div className="login">Login</div>
          <div className="VLine">|</div>
          <div className="sign">Sign up</div>
        </div>
      </header>
    );
  }
}

export default Nav;
