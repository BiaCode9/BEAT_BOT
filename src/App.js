import React, { useEffect, useState } from 'react';
import './App.css';

function App() {






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
          <button type="button">Create</button>
        </form>
        <form className="playlist">
          <input type="text" placeholder="Artist/Song Search"></input>
          <button type="button">+ Add Song</button>
        </form>
        <div>
          <p> Playlist here </p>


        </div>


      </main>

      <footer>Footer</footer>

    </div>
  );
}

export default App;


//have onSubmit attach to a form for input and button

// handleChange stores what is in the input box