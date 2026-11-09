import {useState, useEffect} from 'react'


function FavoriteStations() {

    /* favoriting stations */
    const [savedStations, setSavedStations] = useState(() => {
        try {
            const stored = localStorage.getItem('savedStations');
            return stored ? JSON.parse(stored) : [];
        } catch {
        return [];
        }
    });

}

export default FavoriteStations