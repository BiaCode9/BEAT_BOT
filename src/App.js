import React, { useEffect, useState } from 'react';
import { Route } from 'react';
import './App.css';
import axios from "axios"

function App() {

  const [track, updateTrack] = useState([])


  useEffect((e) => {
    apiCall()
  }, [])

  // updateTrack(response.results.track.name)


  const getTracks = async (e) => {
    e.preventDefault();
    apiCall(track)
  }


  const apiCall = async () => {
    const response = await axios({
      url: "http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=9357323b21f3ac3a16289e7e62479e88&format=json",
      params: {
        track: track,
        limit: 8
      }
    })

    console.log(response.data.results)
  }

  return (

    <div className="App">
      <header className="App-header">
        <nav>
          <h1>BEAT BOX</h1>
        </nav>
      </header>
      <main>
        <div>
          <input
            type="text"
            id="djname"
            placeholder="Create Your Own DJ Name">
          </input>
        </div>
        {/* <button type="button">Create</button> ... Enter will be the on Submit ... will just the name show up in my particular font/size and box will disappear? */}
        <form className="playlist">
          <input
            type="text"
            placeholder="Track Search"
            value={track}
            onChange={(e) => updateTrack(e.target.value)} />

          <button onClick={getTracks} type="button">+ Add Song</button>

        </form>
        <div>
          <p> Search Results Here
            {/* {track.map(track =>
            <Playlist
              key={recipe.response.data.results.trackmatches.track}
              track={track}
            />
          )} */}
          </p>
        </div>

      </main>

      <footer>Footer</footer>

    </div>
  );

}

export default App;


//have onSubmit attach to a form for input and button

// handleChange stores what is in the input box

//Enter be onSubmit for Create a DJ name 

 // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   apiCall()
  // }


  // .setStae  response.data.results.trackmatches.track

  // need to map