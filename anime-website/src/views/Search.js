'use client';
import React, { Suspense } from 'react';

const AnimeSearchComponent = React.lazy(() => import('../components/animesearch'));

function Search() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AnimeSearchComponent />
        </Suspense>
    );
}

export default Search;
