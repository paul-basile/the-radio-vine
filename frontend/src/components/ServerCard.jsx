

function ServerCard ({server}) {
    return (
        <div className="server-card">
            <div className="server-info">
                <h3>Server Status and General Information</h3>
                <br></br>
                <p className="status">STATUS: {server.status}</p>
                <p className="station-count">Total Available Radio Stations: {server.stations}</p>
                <p className="languages">Supported Languages: {server.languages}</p>
                <p className="countries">Supported Countries: {server.countries}</p>
                <p className="clicks-last-hour">Radio stations clicked in the last hour: {server.clicks_last_hour}</p>
                <p className="clicks-last-hour">Radio stations clicked in the last day: {server.clicks_last_day}</p>
                <br></br>
                <p className="supported-version">Supported Version: {server.supported_version}</p>
                <p className="software-version">Software Version: {server.software_version}</p>
                <div className="light-animation">
                    <div className="red-sq"></div>
                    <div className="green-sq"></div>
                    <div className="blue-sq"></div>
                    <div className="yellow-sq"></div>
                </div>
            </div>
        </div>
    )
}

export default ServerCard