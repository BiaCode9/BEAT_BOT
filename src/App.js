import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react';
import './App.css';
import axios from "axios";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Searchresults from './components/searchresults';
import Playlist from './Playlist'

// import { BrowserRouter as Router } from 'react-router-dom'

function App() {


  const [name, setName] = useState('');
  const [nameFinished, setNameFinished] = useState(false);
  const [search, updateSearch] = useState('');
  const [song, updateSong] = useState([])


  const getTracks = async (e) => {
    e.preventDefault();
    await apiCall(search)
  }


  const apiCall = async () => {
    const response = await axios({
      url: `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=9357323b21f3ac3a16289e7e62479e88&format=json`,
      params: {
        track: search,
        limit: 8
      }
    })
    console.log(response)
    updateSong(response.data.results.trackmatches.track)
  }

  return (
    <body>
      <div className="App">
        <header className="App-header">
          <React.Fragment>
            <Navbar />
            {/* <Switch> */}
            {/* <Route exact path="/" component={App} />
          <Route path="./Playlist" component={Playlist} /> */}
            {/* </Switch> */}
          </React.Fragment>
        </header>
        <main>
          {nameFinished
            ? <h1>{name}</h1>
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
          <form
            onSubmit={getTracks}>
            <input
              type="text"
              placeholder="Track Search"
              value={search}
              onChange={(e) => updateSearch(e.target.value)} />

            <button type="submit">+ Add Song</button>

          </form>
          <div>
            {/* <Route path='/Playlist'> */}

            {song.length ? <Searchresults
              tracks={song}
            /> : null}

            {/* </Route> */}
          </div>

        </main>

        <Footer />

      </div>
    </body>
  );
}

export default App;
