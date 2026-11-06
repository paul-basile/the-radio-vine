import { fetchAllStations } from "../api/radioBrowser"
import { useEffect } from "react"

function Home() {

    /* useEffect to only run ONCE */
    useEffect(() => {
        fetchStationData();
    },);

    /* calling fetchAllStations function to use the data */
    const fetchStationData = async () => {
        const data = await fetchAllStations();
        console.log(data);
    }

    return (
        <div>
            This is the home page.
        </div>
    )
};

export default Home;