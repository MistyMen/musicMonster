import React, { Component } from 'react';

class Register extends Component {
  render() {
    return(
      <form className="loginPage">
        <input
          className="Username"
          type="text"
          placeholder="Enter the username you want"/>
        <input
          className="Password"
          type="text"
          placeholder="Enter the Password you want"/>
        <input
          className="Password2"
          type="text"
          placeholder="Verify your password"/>
        <input
          className="eMail"
          type="text"
          placeholder="Enter Your e-Mail"/>
        <button
          type="submit"
          className="loginButton">
            Login
        </button>
      </form>
      )
  }
}

export default Register;
