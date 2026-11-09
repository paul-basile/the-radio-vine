
import { fetchServerStats } from "../api/radioBrowser"
import { useEffect, useState } from "react"
import ServerCard from "../components/ServerCard";


function ServerStats() {

    const [serverData, setServerData] = useState([null]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchServerData();
    }, []);

    /* calling fetchServerData function to use data */
    const fetchServerData = async () => {

        try {
            const data = await fetchServerStats();
            setServerData(data);
        } catch (err) {
            console.error("Error fetching server data: ", err);
        } finally {
            setIsLoading(false);
        }
        
    }

    return (
        <div className="app">
            <div className="navbar">
                <div className="logo">
                    <h1><a href="/">The Radio Vine</a></h1>
                </div>
                <div>
                    <ul className="selections-list">
                        <li><a href="/stations">Stations</a></li>
                        <li><a href="/favorites">Favorites</a></li>
                        <li><a href="/server">Server Stats</a></li>
                    </ul>
                </div>
            </div>


            {isLoading ? 
            ( <div className="loading"><div className="spinner"></div><p>Loading server data...</p></div> ) 
            : 
            ( <div className="server-container">
                <ServerCard server={serverData}/>
            </div> )
            }

        </div>
    )
    
}

export default ServerStats