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
      input: "",
      artist: "",
      image: "",
      song: "",
      comments:"",
      username: "",
      password: "",
      home: true,
      isLoggedIn: false,
      dataBase: []
    };
    this.submitToServer = this.submitToServer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
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
  };

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      input: event.target.value,
    });
    console.log(event.target.value);
    // console.log(this.state.input);
  }

  checkUrl() {
    console.log("CheckingURL -------->", this.state.home);
    window.location.href.includes("results")
      ? this.setState({ home: false })
      : this.setState({ home: true });
  }

  handleUsernameInput(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value,
    });
    console.log(event.target.value);
  }

  handlePasswordInput(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
    console.log(event.target.value);
  }

  handleSongDelete(id) {
    axios
      .delete(`http://localhost:3001/api/artists/${id}`)
      .then(res => {
        console.log("DELETE Request SENT");
      })
      .catch(err => console.log(err));
  }

  callSpotifyApi(e) {
    e.preventDefault();
    const artistSearch = this.state.input;
    const APIToken =
      "BQCAYxe9bOudPJYcLO7LI9od_Y6hGuLIaP2JKyMztS-fpiPj9o9JeB4mJZ2ybEO-SCio5qqxAzMGdNAkAJykFqMtT8ja9rCjaTD-Knt2vtk7SExAtG9tlDDlENMtyBA3K7y-HCq1QlbjfyIhFWkIEqeZIUcaeYdqbfJa";

    axios({
      url: `https://api.spotify.com/v1/search?q=${artistSearch}&type=artist`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${APIToken}`,
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
        console.log("Track URL", track_url);

        this.setState({
          searchData: res.data.artists.items,
          artist: artistName,
          image: image,
          song: "https://open.spotify.com/embed?uri=" + track_url,
          isLoggedIn: true
        });
        console.log("Track URL", this.state.track);
      })
      .catch(err => console.error(err));
  }

  submitToServer(e) {
    e.preventDefault();
    console.log("this is the submit to server -----------");

    axios({
      method: "POST",
      url: "http://localhost:3001/api/user/",
      data: {
        name: this.state.artist,
        image: this.state.image,
        song: this.state.song,
        comments:this.state.comments,
      }

    })
      .then(res => {
        console.log(this.state.artist, "-----------");
        // res will include all the information you sent back from the server
        const savingMusicToDataBase = {
          name: res.data.artists.items["0"].name,
          picture: res.data.artists.items["0"].images[1].url,
        };
        this.setState(prevState => {
          return {
            artists: prevState.artists.concat(savingMusicToDataBase),
          };
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("Rendering...");
    console.log(this.state.home);

    let searchF = null;
    if(window.location.href.includes("login") == false && window.location.href.includes("register") == false) {
      searchF = <div className="searchSection">
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
                        checkUrl={this.checkUrl}
                        artist={this.state.artist}
                        image={this.state.image}
                        song={this.state.song}
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
