
import { fetchAllStations } from "../api/radioBrowser"
import { useEffect, useState } from "react"
import StationCard from "../components/StationCard";
import useFavorites from "../hooks/useFavorites"
import { Link } from "react-router";
function Stations() {

    /* stations to be held in a useState to be sure the data is existing, updating when new data is there */
    const [stationList, setStationList] = useState([]);

    /* to track if data is being loaded properly upon component creation */
    const [isLoading, setIsLoading] = useState(true);

    /* same as stationList, but filtered */
    const [filteredList, setFilteredList] = useState([]);

    /* controls sorting of stations based on selection */
    const [sortBy, setSortBy] = useState("votes_desc");

    /* state for searching */
    const [searchQuery, setSearchQuery] = useState("");

    const {toggleFavorite, isFavorite} = useFavorites();

    /* useEffect for only running ONCE in the website */
    useEffect(() => {
        fetchStationData();
    }, []);

    /* whenever sortBy or stationList state changes value, this runs */
    useEffect (() => {
        filterAndSort();
    }, [sortBy, stationList, searchQuery]);

    /* calling fetchAllStations function to use the data */
    const fetchStationData = async () => {

        try {
            const data = await fetchAllStations();
            setStationList(data);
        } catch (err) {
            console.error("Error fetching station data: ", err);
        } finally {
            setIsLoading(false);
        }
        
    }

    /* copy the current stationList, then filter it through different types of filtering as notated by the switch */
    const filterAndSort = () => {

        /* filters any station in which the name of the station contains whatever the user is typing */
        let filtered = stationList.filter((station) => station.name.toLowerCase().includes(searchQuery.toLowerCase()));
        filtered.sort((a, b) => {
            switch (sortBy) {
                case "votes_desc":
                    return b.votes - a.votes
                case "votes_dasc":
                    return a.votes - b.votes;
                case "clicks_desc":
                    return b.clickcount - a.clickcount;
                case "clicks_asc":
                    return a.clickcount - b.clickcount;
            }
        })
        setFilteredList(filtered);
        
    };

    /* if loading, show loading screen. if not loading, show station cards, which are mapped with a key for each station there is into a card component */
    return (
        <div className="app">
            <div className="navbar">
                <div className="logo">
                    <h1><Link to="/">The Radio Vine</Link></h1>
                </div>
                <div>
                    <ul className="selections-list">
                        <li><Link to="/stations">Stations</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                        <li><Link to="/server">Server Stats</Link></li>
                    </ul>
                </div>
            </div>

            <div className="controls">
                <div className="filter-group">
                    <label>Sort by:</label>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="votes_desc">Descending Votes</option>
                        <option value="votes_asc">Ascending Votes</option>
                        <option value="clicks_desc">Descending 24hr Clicks</option>
                        <option value="clicks_asc">Ascending 24hr Clicks</option>
                    </select>
                </div>
                <div className="search-section">
                    <input 
                    type="text" 
                    placeholder="Search stations..." 
                    className="search-input"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}/>
                </div>
            </div>

            {isLoading ? 
            ( <div className="loading"><div className="spinner"></div><p>Loading station data...</p></div> ) 
            : 
            ( <div className="station-container">
                {filteredList.map((station) => (
                    <StationCard 
                    station={station} 
                    key={station.stationuuid}
                    isFavorite={isFavorite(station.stationuuid)}
                    onToggleFavorite={toggleFavorite}/>
                ))}
            </div> )
            }
        </div>
    )

}

export default Stations