import React from 'react';
import MovieItem from './MovieItem';

const Movies = (props) => {

    // Individual elements pulled out of the array
    return props.myMovies.map(
        (movie) => {
            return <MovieItem myMovie={movie} key={movie.imdbID} />
        }
    )
}

export default Movies; // Exports the component