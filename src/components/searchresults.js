import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom"
import './searchresults.css';
const searchResults = (props) => {
  return (
    <>
      {
        props.tracks.map((item, index) => (
          <div className="searchResults">
            <Link to={`/songs/${index}`}>
              <h1>{item.name}</h1>
            </Link>
            <h2>{item.artist}</h2>
            <h3>{item.url}</h3>


            <button onClick={() => props.addToPlaylist(item)}>+ Add to Playlist</button>
            <Link to={`/Playlist/${index}`}><h2>{props.items && props.item.name}</h2></Link>


          </div>
        )
        )
      }
    </>
  )
}
export default searchResults;
// export default withRouter(searchResults);



