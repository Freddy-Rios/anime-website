import { useEffect, useState } from 'react'

function useReposSearch(query) {
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Do nothing if the query is empty
        if (!query) {
            setImageUrls([]);
            setLoading(false);
            setError(false);
            return;
        }

        let ignore = false;
        const controller = new AbortController();

        async function fetchSearchResults() {
            setLoading(true);
            setError(false);

            try {
                const response = await fetch(
                    `https://api.jikan.moe/v4/anime?q=${query}`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                if (!ignore) {
                    // Assuming each item has an 'images' property with the desired URLs
                    setImageUrls(data.data.map(item => item.images.jpg.image_url));
                }
            } catch (e) {
                if (!ignore) {
                    console.error("Error during fetch:", e);
                    setError(true);
                }
            } finally {
                if (!ignore) setLoading(false);
            }
        }

        fetchSearchResults();

        return () => {
            ignore = true;
            controller.abort();
        };
    }, [query]);

    return [imageUrls, loading, error];
}

export default useReposSearch;
