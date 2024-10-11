import React from 'react';

const Movies = (props) => {

    // Returns the relevant message
    return (
        <div>
            movies component
            {console.log(props.myMovies)}
        </div>
    );
}

export default Movies; // Exports the component