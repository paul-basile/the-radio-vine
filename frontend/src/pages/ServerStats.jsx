function ServerStats() {

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

            {isLoading ? 
            ( <div className="loading"><div className="spinner"></div><p>Loading server status data...</p></div> ) 
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

export default ServerStats