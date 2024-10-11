import React from 'react';

// MovieItem component
const MovieItem = (props) => {
    // Renders individual movie details from the JSON
    return (
        <div>
            <h3>{props.myMovie.Title}</h3>
            <p>{props.myMovie.Year}</p>
            <img src={props.myMovie.Poster}></img>
        </div>
    );
}

export default MovieItem; // Exports the component