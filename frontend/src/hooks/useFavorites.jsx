import { useState, useEffect } from 'react'


/* This hook transfers the following useState and useEffect to the other pages. The useState's
favorites array runs on the first render of the page and any time favorites changes. */

function loadFavorites() {
    /* load favorites from localStorage, return empty array if none */
    try {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : []
    } catch (e) {
        return [];
    }
}

function useFavorites() {

                /* LOCAL STORAGE AND FAVORITES DEALING WITH */

    const [favorites, setFavorites] = useState(loadFavorites());

    /* turns favorites into an string for JSON, then saves it to localStorage */
    useEffect(() => {
        try {
            localStorage.setItem('favorites', JSON.stringify(favorites))
        } catch (e) {
            console.error("Could not save favorites", e);
        }
    }, [favorites]);

    const toggleFavorite = (station) => {
        setFavorites((prevFavorites) => {
            const exists = prevFavorites.some((fav) => fav.stationuuid === station.stationuuid);
            if (exists) {
                // if clicked while favorited, filters out favorite, removing it
                return prevFavorites.filter((fav) => fav.stationuuid !== station.stationuuid);
            } else {
                return [...prevFavorites, station]; // creates copy with the item added to it
            }
        }
    )};

    const isFavorite = (uuid) => favorites.some((fav) => fav.stationuuid === uuid);

    return {favorites, toggleFavorite, isFavorite}
}

export default useFavorites