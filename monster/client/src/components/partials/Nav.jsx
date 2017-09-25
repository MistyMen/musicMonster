import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <header>
        <div className="reg">
          <Link to="/login"><div className="Login">Login</div></Link>
          <div className="VLine">|</div>
          <div className="sign">Sign up</div>
        </div>
      </header>
    );
  }
}

export default Nav;
