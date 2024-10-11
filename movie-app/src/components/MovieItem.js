import React from 'react';

const MovieItem = (props) => {

    // Renders individual movie details
    return (
        <div>
            <h3>{props.myMovie.Title}</h3>
            <p>{props.myMovie.Year}</p>
            <img src={props.myMovie.Poster}></img>
            <hr></hr>
        </div>
    );
}

export default MovieItem; // Exports the component