import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import axios from "axios";
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Searchresults from './components/searchresults';
import Button from './components/Button';
import Playlist from './Playlist';
import NameBar from './components/NameBar';
import Searchbar from './components/SearchBar';

// import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  const [name, setName] = useState('');
  const [nameFinished, setNameFinished] = useState(false);
  const [search, updateSearch] = useState('');
  const [song, updateSong] = useState([]);

  const [playlist, setPlaylist] = useState([])

  const getTracks = async (e) => {
    e.preventDefault();
    await apiCall(search)
  }
  const apiCall = async () => {
    const response = await axios({
      url: `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=9357323b21f3ac3a16289e7e62479e88&format=json`,
      params: {
        track: search,
        limit: 15
      }
    })

    console.log(response)
    updateSong(response.data.results.trackmatches.track)

  }

  // useEffect(() => {
  //   localStorage.clear()
  // })


  const addToPlaylist = (item) => {
    if (!localStorage.getItem('playlist')) {
      localStorage.setItem('playlist', JSON.stringify([]));
    }

    const newPlaylist = JSON.parse(localStorage.getItem('playlist'));
    newPlaylist.push(item.name);
    localStorage.setItem('playlist', JSON.stringify(newPlaylist));
    setPlaylist(playlist);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

      </header>
      <main>
        <Route path="/Playlist">
          <Playlist />
        </Route>

        <div className="mainpage">
          {nameFinished
            ? <NameBar text={name} />
            : <div>
              <form onSubmit={(e) => setNameFinished(true)}>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="djname"
                  placeholder="Create Your Own DJ Name">
                </input>
              </form>
            </div>
          }
          <form className="gettracks"
            onSubmit={getTracks}>
            <input
              type="text"
              placeholder="Track Search"
              value={search}
              onChange={(e) => updateSearch(e.target.value)} />
            <Button label="+ Add Song" />
          </form>
          <div>
            <Route exact path='/'>
              {song.length ? <Searchresults
                tracks={song}
                addToPlaylist={addToPlaylist}
              /> : null}
            </Route>
          </div>
        </div>
      </main>
      <div className="footer">
        <footer>
          <img id="copyright" src="https://i.imgur.com/moHcoKr.png"></img>
          <h1>DJ BIA BIA 2020</h1>
        </footer>
      </div>
    </div>

  );
}
export default App;