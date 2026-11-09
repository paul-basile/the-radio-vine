
import { fetchAllStations } from "../api/radioBrowser"
import { useEffect, useState } from "react"
import StationCard from "../components/StationCard";

function Stations() {

    /* stations to be held in a useState to be sure the data is existing, updating when new data is there */
    const [stationList, setStationList] = useState([]);

    /* to track if data is being loaded properly upon component creation */
    const [isLoading, setIsLoading] = useState([true]);

    /* same as stationList, but filtered */
    const [filteredList, setFilteredList] = useState([]);

    /* controls sorting of stations based on selection */
    const [sortBy, setSortBy] = useState("votes_asc");

    /* state for searching */
    const [searchQuery, setSearchQuery] = useState("");

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
                case "votes_asc":
                    return b.votes - a.votes
                case "votes_desc":
                    return a.votes - b.votes;
                case "clicks_asc":
                    return b.clickcount - a.clickcount;
                case "clicks_desc":
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
                    <h1><a href="/">The Radio Vine</a></h1>
                </div>
                <div>
                    <ul className="selections-list">
                        <li><a href="/stations">Stations</a></li>
                        <li><a href="/server">Server Stats</a></li>
                    </ul>
                </div>
            </div>

            <div className="controls">
                <div className="filter-group">
                    <label>Sort by:</label>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="votes_asc">Ascending Votes</option>
                        <option value="votes_desc">Descending Votes</option>
                        <option value="clicks_asc">Ascending 24hr Clicks</option>
                        <option value="clicks_desc">Descending 24hr Clicks</option>
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
                {filteredList.map((station, key) => (
                    <StationCard station={station} key={key}/>
                ))}
            </div> )
            }
        </div>
    )

}

export default Stations