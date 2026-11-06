
import { fetchAllStations } from "../api/radioBrowser"
import { useEffect, useState } from "react"

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

    return (
        <div className="">
            This is the stations page.
        </div>
    )

}

export default Stations