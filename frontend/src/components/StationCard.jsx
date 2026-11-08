
/* from api call, fills this component with data from the api, and is displayed on screen after loading */
function StationCard({station}) {
    return ( 
    <div className="station-card">
        <div className="station-header">
            <div className="station-info">
                <img src={station.favicon} alt={station.name} />
                <div>
                    <h3>{station.name}</h3>
                    <p className="country">Country: {station.country} ({station.countrycode})</p>
                    <p className="state">State: {station.state}</p>
                    <p className="language">Language: {station.language}</p>
                    <p className="votes">Votes: {station.votes}</p>
                    <p className="clicks">Times Visited within the last 24 hours: {station.clickcount}</p>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default StationCard