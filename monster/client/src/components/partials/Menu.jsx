import React, { Component } from "react";
import { scaleRotate as Menu } from "react-burger-menu";

class BurgerMenu extends Component {
  render() {
    return (
      <Menu
          width={"15%"}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <ul>
            <li>
              <a id="home" className="menu-item" href="/">
                Home
              </a>
            </li>
            <li>
              <a id="user" className="menu-item" href="/user">
                User
              </a>
            </li>
            <li>
              <a
                id="about"
                className="menu-item"
                href="https://github.com/MistyMen/musicMonster"
              >
                About
              </a>
            </li>
            <li>
              <a id="contact" className="menu-item" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a
                id="setting"
                onClick={this.showSettings}
                className="menu-item--small"
                href=""
              >
                Settings
              </a>
            </li>
          </ul>
        </Menu>
    );
  }
}

export default BurgerMenu;
