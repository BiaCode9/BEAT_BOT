import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { Link } from "react-router-dom"

const searchResults = (props) => {
  // <h1>Search results here</h1>



  return (
    <>
      {
        props.tracks.map(item => (
          <div>
            {/* key={response.data.results.trackmatches.track} */}
            <h1>{item.name}</h1>
            
            <h2>{item.artist}</h2>
            
            {item.url}
           
          </div>
        )
        )
      }
    </>
  )

}


export default searchResults;

// export default withRouter(searchResults);





