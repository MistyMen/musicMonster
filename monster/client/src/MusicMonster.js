// This is the top level of the application

// Import all the necessary packages
import React, { Component } from "react";
import axios from "axios";

import { Route, Redirect, Switch } from "react-router-dom";
// Import all the necessary components
// import Iframe from "react-iframe";
import Nav from "./components/partials/Nav";
import Footer from "./components/partials/Footer";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import { Link } from "react-router-dom";
import { scaleRotate as Menu } from "react-burger-menu";
// import Result from './components/Result';

// CSS files
import "./reset.css";
import "./App.css";

class MusicMonster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: null,
      input: "",
      artist: "",
      image: "",
      track: "",
      home: true
    };
    this.submitToServer = this.submitToServer.bind(this);
    this.callSpotifyApi = this.callSpotifyApi.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.callSpotifyApi = this.callSpotifyApi.bind(this);
    this.checkUrl = this.checkUrl.bind(this);
  }

  componentWillMount() {
    console.log("Will Mount...");
  }

  componentDidMount(e) {
    console.log("HAAAAAAAAAA");
    this.checkUrl();

    console.log("Did mount...");
  }
  handleInputChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  checkUrl() {
    window.location.href.includes("results")
      ? this.setState({ home: false })
      : this.setState({ home: true });
  }

  callSpotifyApi(e) {
    e.preventDefault();
    const artistSearch = this.state.input;
    const APIKey =
      "BQC1LZnWwTlo39vJZi6hRbAMGf9dI0ptqQDDLhgMA00mxDwrEA96JlbtNBUcDFveHnsWImCwtFPEJAJJ4Hh1JtKrfSRVhcJ5TxC8Xkh8ofy-OJTw4BhG9IFUedHYLNsfvUrkaQu-gUME16BbKGbrO2MvxrjX_Z-aAfnd&refresh_token=AQAOC73a_iLb38OuiEw3XIggOmePs89XYSmkAbok8yUfgmwfGLZ_pDhgZyK7rc9DcDsXLdPw_190dYR3UvqqkOgTwWoFyQCgcYswwdQed0q77iG1MkCJvR0ouhafItGOamE";

    axios({
      url: `https://api.spotify.com/v1/search?q=${artistSearch}&type=artist`,
      method: `GET`,
      headers: {
        Authorization: `Bearer ${APIKey}`
      }
    })
      .then(res => {
        console.log(res);

        const artistName = res.data.artists.items["0"].name;
        const track_url = res.data.artists.items["0"].external_urls.spotify;
        const artistPopularity = res.data.artists.items["0"].popularity;
        const artistFollowers = res.data.artists.items["0"].followers.total;
        const genre = res.data.artists.items[0].genres;
        const image = res.data.artists.items["0"].images[1].url;
        // console.log(genre);
        // console.log(artistName);
        // console.log(artistPopularity);
        // console.log(artistFollowers);
        // console.log(image);
        console.log("Track URL", track_url);

        this.setState({
          searchData: res.data.artists.items,
          artist: artistName,
          image: image,
          track: "https://open.spotify.com/embed?uri=" + track_url
        });
        // console.log("TRACK TRACK, ", this.state.searchData);
        // console.log("Search DATA -------->", res.data.artists.items);
        console.log("Track URL", this.state.track);
      })
      .catch(err => console.error(err));
  }

  submitToServer(e) {
    e.preventDefault();

    axios({
      url: "http:localhost:3001/api/artists",
      method: "POST",
      data: {
        artistSearch: this.state.artist
      }
    })
      .then(res => {
        // res will include all the information you sent back from the server
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("Rendering...");
    console.log(this.state.home);
    return (
      <div id="outer-container">
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
              <a id="user" className="menu-item" href="/">
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
        <main id="page-wrap">
          <Nav />

          <div className={"container" + (this.state.home ? "" : "Sec")}>
            <div className={this.state.home ? "front" : "results"}>
              <div className={"title" + (this.state.home ? "" : "Sec")}>
                Music Monster
              </div>
              <div className={"search" + (this.state.home ? "" : "Sec")}>
                <h3>
                  <span>Genre</span>
                  <span className={"artist" + (this.state.home ? "" : "Sec")}>
                    Artist
                  </span>
                  <span>Music</span>
                </h3>

                <SearchForm
                  home={this.state.home}
                  handleInputChange={this.handleInputChange}
                  callSpotifyApi={this.callSpotifyApi}
                  input={this.state.input}
                />

                <Switch>
                  <Route
                    exact
                    path="/results"
                    render={props => (
                      <Results
                        checkUrl={this.checkUrl}
                        artist={this.state.artist}
                        image={this.state.image}
                        track={this.state.track}
                        data={this.state.searchData}
                        input={this.state.input}
                      />
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default MusicMonster;
