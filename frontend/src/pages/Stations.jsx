
import { fetchAllStations } from "../api/radioBrowser"
import { useEffect, useState } from "react"
import StationCard from "../components/StationCard";

function Stations() {

    /* stations to be held in a useState to be sure the data is existing, updating when new data is there */
    const [stationList, setStationList] = useState([]);
    /* to track if data is being loaded properly upon component creation */
    const [isLoading, setIsLoading] = useState([true]);

    /* useEffect for only running ONCE in the website */
    useEffect(() => {
        fetchStationData();
    }, []);

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

    /* if loading, show loading screen. if not loading, show station cards, which are mapped with a key for each station there is into a card component */
    return (
        <div className="app">
            {isLoading ? 
            ( <div className="loading"><div className="spinner"></div><p>Loading station data...</p></div> ) 
            : 
            ( <div className="station-container">
                {stationList.map((station, key) => (
                    <StationCard station={station} key={key}/>
                ))}
            </div> )
            }
        </div>
    )

}

export default Stations