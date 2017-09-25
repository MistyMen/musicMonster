import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    console.log("User componentDidMount");
    this.props.callingDB();
    this.props.checkUrl();
  }

  render() {
    console.log("isLoggedIn", this.props.isLoggedIn);
    return (
      <div className="UserFav">
        {this.props.isLoggedIn ? (
          this.props.data.map(tracksInfo => (
            <li key={tracksInfo.id}>
              <button onClick={this.props.handlSongDelete(tracksInfo.id)}>x</button>
              <iframe src={tracksInfo.song} width="400" height="415" />

              <input
              value={tracksInfo.comments}
              className=""
              type="text"
              onClick={this.props.handleInputChange}
            />

              {tracksInfo.comments}
              <button onClick={this.props.handleSongEdit(tracksInfo)}>*</button>
            </li>
          ))
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default User;
