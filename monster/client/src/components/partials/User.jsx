import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    console.log("User componentDidMount");
    this.props.callingDB();
    this.props.checkUrl();
    console.log("DataBase", this.dataBase);
  }

  render() {
    console.log("isLoggedIn", this.props.isLoggedIn);
    return (
      <div className="UserFav">
        {this.props.isLoggedIn ? (
          this.props.dataBase.map(tracksInfo => (
            <li key={tracksInfo.id}>
            {console.log(tracksInfo)}
              <button onClick={this.props.handleSongDelete()}>x</button>
              <iframe src={tracksInfo.song} width="400" height="415" />

              <form className="commentForm">
              <input
              value={tracksInfo.comments}
              className="comment"
              type="text"
              onClick={this.props.handleInputChange}
            />
              <button onClick={this.props.handleSongEdit()}>*</button>
              </form>
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


