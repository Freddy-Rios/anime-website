// In your Search.js
import React from 'react';
import AnimeSearchComponent from '../components/animesearch'; // Adjust the path as needed

function Search() {
    return (
        <div>
            <h1>Search for Anime</h1>
            <AnimeSearchComponent />
            {/* Other content in the Search component */}
        </div>
    );
}

export default Search;