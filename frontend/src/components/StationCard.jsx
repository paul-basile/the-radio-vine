
/* from api call, fills this component with data from the api, and is displayed on screen after loading */
function StationCard({station, isFavorite, onToggleFavorite}) {

    return ( 
    <div className="station-card">
        <div className="station-header">
            <div className="station-info">
                <div>
                    <h3 className="station-name"><a href={station.url_resolved} target="_blank">{station.name}</a></h3>
                    <p className="votes"><b>Votes: </b>{station.votes}</p>
                    <p className="country"><b>Country: </b>{station.country} ({station.countrycode})</p>
                    <p className="state"><b>State: </b>{station.state}</p>
                    <p className="language"><b>Language: </b>{station.language}</p>
                    <p className="clicks"><b>Clicks </b>(24hrs): {station.clickcount}</p>
                </div>
                <div>
                    <img src={station.favicon} alt={station.name} />
                </div>
            </div>
            <div className="station-footer">
                <div className="line-design"></div>
                <button type="button" className="favorite-button" onClick={() => onToggleFavorite(station)}>
                    {isFavorite ? '-' : '+'}
                </button>
            </div>
        </div>
    </div> 
    )
}

export default StationCard

/*  onClick={() => favoriteStation(station.stationuuid)} */