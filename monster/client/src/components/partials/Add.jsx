import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <button
        className="AddButton"
        onClick={this.props.submit}>
        +
      </button>
    )
  }
}

export default Add;
