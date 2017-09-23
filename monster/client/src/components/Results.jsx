// import React, { Component } from 'react';
// import Result from './Result';

// class Results extends Component {
//   constructor(props){
//     super(props);
//   }


//   componentWillMount() {
//     console.log("Results will mount...");
//   }

//   componentDidMount() {
//     console.log('Results did mount...');
//   }

//   render() {
//     console.log('Results rendering...');
//     // console.log(this.props.artist, "Artist")
//     console.log(this.props.image, "Image")
//     console.log('tracks here------>',this.props.data)
//     return(
//       <div className="results">

// {this.props.data.map(song => {
//           console.log(song);
//           return <Result song={song} key={song.id} / >
//             })}

//         <div className="result">
//           <ul>
//             <li className="artist">{this.props.artist}</li>
//             <li className="track">{this.props.track}</li>
//             <li className="Album">asas</li>
//             <li className="length">length</li>
//           </ul>
//         </div>
//         <div className="result">
//           <ul>
//             <li className="artist">Artist</li>
//             <li className="track">Track</li>
//             <li className="Album">Album</li>
//             <li className="length">length</li>
//           </ul>
//         </div>
//       </div>
//       )
//   }
// }

import React, { Component } from "react";
import Result from "./Result";
import { Link } from 'react-router-dom'

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : ""
    }
  }

  componentWillMount() {
    console.log("Results will mount...");
  }

  componentDidMount() {
    console.log('Results did mount...in Results');
    this.setState({
      searchResults: "https://open.spotify.com/embed?uri=" + this.props.data["0"].external_urls.spotify
    });

  }

  render() {
    console.log("Results rendering...");
    // console.log(this.props.artist, "Artist")
    console.log(this.props.image, "Image");
    console.log("tracks here------>", this.props.data["0"].external_urls.spotify);
    return (
      <div className="results">
        <img src={this.props.image} alt="Artist Image" />
        <h3>{this.props.artist} </h3>
        <iframe src={this.state.searchResults} width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>



      <form className="SearchForm" submit={this.props.submitToServer}>
        <input
        value= {this.props.input}
        className="search"
        type="text"
        placeholder="Search for a song"
        onChange={this.props.handleInputChange}/>
        <button
        type="submit"
        className="searchButton"
        id="submit"><Link type="submit" to="/api/artists">Find</Link></button>
      </form>
      </div>
    );
  }
}
export default Results;
// {data.match('/' + this.props.input + '/g')}

   // {this.props.data.filter(d => {
   //  console.log(this.props.input)
   //  // let dataD = d
   //  console.log(d.name)
   //  // console.log(this.props.input == d.match('/' + d.name + '/g'))


   // })}

   //        }
// var longWords = words.filter(function(word){
//   return word.length > 6;
// });
     // {this.props.data(song => {
     //      console.log(song);
     //        })}
// return <Result song={song} key={song.id} />
   //   <span>{this.props.artist}</span>
     //   <img src={this.props.image} />
// {this.props.input}
// <span >{this.props.image}</span>
