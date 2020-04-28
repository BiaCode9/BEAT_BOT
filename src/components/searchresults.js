import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom"
import './searchresults.css';

const searchResults = (props) => {




  return (
    <>
      {
        props.tracks.map(item => (
          <div className="searchResults">
           
            <h1>{item.name}</h1>
            
            <h2>{item.artist}</h2>
            
            <img src={item.image[0]} />
            
            <h3>{item.url}</h3>
           
          </div>
        )
        )
      }
    </>
  )

}


export default searchResults;

// export default withRouter(searchResults);





