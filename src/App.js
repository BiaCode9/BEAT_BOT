import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"


function App() {

  const [track, updateTrack] = useState([])

  useEffect(() => {

    apiCall()

  }, [])


  const apiCall = async () => {
    const response = await axios({
      url: "http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=9357323b21f3ac3a16289e7e62479e88&format=json",
      params: {
        track: "Believe"
      }
    })
    console.log(response)
  }
  // updateTrack(response.results.track.name)





  return (

    <div className="App">
      <header className="App-header">
        <nav>
          <h1>BEAT BOX</h1>
        </nav>
      </header>
      <main>
        <form className="djname">
          <input type="text" placeholder="Create Your Own DJ Name"></input>
          {/* <button type="button">Create</button> ... Enter will be the on Submit ... will just the name show up in my particular font/size and box will disappear? */}
        </form>
        <form className="playlist">
          <input type="text" placeholder="Track Search"></input>
          <button type="button">+ Add Song</button>
        </form>
        <div>
          <p> Search Results Here </p>


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