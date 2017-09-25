import React, { Component } from "react";

class User extends Component {
  render() {
    console.log("isLoggedIn", this.props.isLoggedIn);
    return (
<div>
        {(this.props.isLoggedIn) ? this.props.data.map(tracksInfo => 
             <li key={tracksInfo.id}>
            <button
              onClick={id => {
                this.props.handleSongDelete(this.props.Song.id);
              }}>x
            </button>
            <iframe src={tracksInfo.track} width="400" height="415" />
            {tracksInfo.comments}
            <button
            onClick={id => {
              this.props.handleSongEdit(this.props.Song.id);
            }}>*
          </button>
          </li>
           ) : <div />}
       
      </div>
    );
  }
}

export default User;
