import React, { useState } from 'react';
import useReposSearch from '../hooks/useReposSearch'; // Adjust the path to your hook

function AnimeSearchComponent() {
    const [inputQuery, setInputQuery] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [imageUrls, loading, error] = useReposSearch(searchQuery);

    const handleInputChange = (e) => {
        setInputQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(inputQuery); // Set the search query to trigger the search
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputQuery} 
                    onChange={handleInputChange} 
                    placeholder="Search for an anime..." 
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Error occurred while fetching data.</p>}
            {!loading && !error && (
                <div>
                    {imageUrls.map((url, index) => (
                        <img key={index} src={url} alt={`Anime ${index + 1}`} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default AnimeSearchComponent;