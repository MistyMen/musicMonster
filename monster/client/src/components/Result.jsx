import React, { Component } from 'react';


class Result extends Component {
  constructor(props){
    super(props);
    this.state={
      searchResults: ""
    }
  }
  componentDidMount(){
    this.setState({
      searchResults: "https://open.spotify.com/embed?uri=" + this.props.data["0"].external_urls.spotify
    })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.tweed.content !== this.props.tweed.content;
  // }

  render() {
    console.log('Q rendering ____)_)_)_)_)_)_)_(KJHjwdjhwjdhwjdh', this.props.song);
    return (
      <div className="results">
        {this.props.song.href}
        <iframe src={this.state.searchResults} width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
      </div>
    )
  }
}
export default Result;

 // {this.props.songs}
