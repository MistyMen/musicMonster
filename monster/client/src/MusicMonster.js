// This is the top level of the application

// Import all the necessary packages
import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

// Import all the necessary components
import Nav from "./components/partials/Nav";
import Footer from "./components/partials/Footer";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import { Link } from "react-router-dom";
import Menu from "./components/partials/Menu";
import User from "./components/partials/User";
import Register from "./components/Register";
import Login from "./components/Login";

// CSS files
import "./reset.css";
import "./App.css";

class MusicMonster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: null,
      id: "",
      input: "",
      artist: "",
      image: "",
      song: "",
      comments: "",
      username: "",
      password: "",
      home: true,
      isLoggedIn: true,
      dataBase: []
    };
    this.submitToServer = this.submitToServer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSongDelete = this.handleSongDelete.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.callSpotifyApi = this.callSpotifyApi.bind(this);
    this.callingDB = this.callingDB.bind(this);
    this.checkUrl = this.checkUrl.bind(this);
  }

  componentWillMount() {
    console.log("Will Mount...");
  }

  componentDidMount() {
    console.log('Did mount...');
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
    console.log(event.target.value);
    // console.log(this.state.input);
  }

  checkUrl() {
    console.log("CheckingURL -------->", this.state.home);
    window.location.href.includes("results") ||
    window.location.href.includes("user")
      ? this.setState({ home: false })
      : this.setState({ home: true });
  }

  handleUsernameInput(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value
    });
    console.log(event.target.value);
  }

  handlePasswordInput(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value
    });
    console.log(event.target.value);
  }

  handleSongDelete(event) {
    console.log('del', event);
    axios({
      method: "delete",
      url: `http://localhost:3001/api/user`,
      data: event
    })
      .then(res => {
        this.callingDB();
        console.log("DELETE Request SENT");
      })
      .catch(err => console.log(err));
  }

  callingDB() {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/user/`
    })
      .then(res => {
        console.log(res);
        this.setState({
          dataBase: res.data.data.records,
        });
      })
      .catch(err => console.error(err));
  }

  callSpotifyApi(e) {
    e.preventDefault();
    const artistSearch = this.state.input;
    const APIToken =
      "BQCVnUdcUpkMM8FOLa0Y8ZeUr1G_Ci9GwztXZorDVKbm1oWAO_4xODRhcxwvncxV57JU-i1KfR-jtJaEmc0SWCo4tVoVJutxPuwzby2iFLP1C6kMoQ-B3XzbHHh1KnZBMnnNBhdYQ3vED5Ut_Eh09WYIs-J6nh6A3_2G";

    axios({
      url: `https://api.spotify.com/v1/search?q=${artistSearch}&type=artist`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${APIToken}`
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
        const id = res.data.artists.items["0"].id;

        console.log("Track URL", track_url);

        this.setState({
          id: id,
          searchData: res.data.artists.items,
          artist: artistName,
          image: image,
          song: "https://open.spotify.com/embed?uri=" + track_url,
          isLoggedIn: true
        });
        console.log("IDI IDIDIDIDIDIDDI", this.state.id);
        console.log("SEARCH ID ID ID", this.state.searchData);
      })
      .catch(err => console.error(err));
  }

  submitToServer(e) {
    console.log('id:', this.state.id,
'artist: ', this.state.artist,
'image:', this.state.image,
'song: ', this.state.song);
    e.preventDefault();
    console.log("this is the submit to server -----------");
    axios({
      method: "POST",
      url: "http://localhost:3001/api/results",
      data: {
        id: this.state.id,
        artist: this.state.artist,
        image: this.state.image,
        song: this.state.song,
        comments: 'Comment'
      }
    })
      // .then(res => {
      //   console.log(this.state.artist, "-----------");
      //   // res will include all the information you sent back from the server
      //   const savingMusicToDataBase = {
      //     artist: res.data.artists.items["0"].name,
      //     image: res.data.artists.items["0"].images[1].url
      //   };
      //   this.setState(prevState => {
      //     return {
      //       artists: prevState.artists.concat(savingMusicToDataBase)
      //     };
      //   });
      // })
      // .catch(err => console.log(err));
  }

  render() {
    console.log("Rendering...");
    console.log(this.state.home);

    let searchF = null;
    if (
      window.location.href.includes("login") == false &&
      window.location.href.includes("register") == false
    ) {
      searchF = (
        <div className="searchSection">
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
        </div>
      );
    }
    return (
      <div id="outer-container">
        <Menu />
        <main id="page-wrap">
          <Nav />

          <div className={"container" + (this.state.home ? "" : "Sec")}>
            <div className={this.state.home ? "front" : "results"}>
              <div className={"title" + (this.state.home ? "" : "Sec")}>
                Music Monster
              </div>
              <div className={"search" + (this.state.home ? "" : "Sec")}>
                {searchF}
                <Switch>
                  <Route
                    exact
                    path="/login"
                    render={props => (
                      <Login
                        username={this.state.username}
                        password={this.state.password}
                        handleUsernameInput={this.handleUsernameInput}
                        handlePasswordInput={this.handlePasswordInput}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/register"
                    render={props => (
                      <Register
                        username={this.state.username}
                        password={this.state.password}
                        handleUsernameInput={this.handleUsernameInput}
                        handlePasswordInput={this.handlePasswordInput}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/results"
                    render={props => (
                      <Results
                        submit={this.submitToServer}
                        checkUrl={this.checkUrl}
                        artist={this.state.artist}
                        image={this.state.image}
                        song={this.state.song}
                        data={this.state.searchData}
                        input={this.state.input}
                        submitToServer={this.submitToServer}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/user"
                    render={props => (
                      <User
                        isLoggedIn={this.state.isLoggedIn}
                        checkUrl={this.checkUrl}
                        callingDB={this.callingDB}
                        dataBase={this.state.dataBase}
                        handleSongDelete={this.handleSongDelete}
                        handleSongEdit={this.handleSongDelete}
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
