

function ServerCard ({server}) {
    return (
        <div className="server-card">
            <div className="server-info">
                <h3>Server Status and General Information</h3>
                <p class="status">STATUS: {server.status}</p>
                <p class="station-count">Total Available Radio Stations: {server.stations}</p>
                <p class="languages">Supported Languages: {server.languages}</p>
                <p class="countries">Supported Countries: {server.countries}</p>
                <p class="clicks-last-hour">Radio stations clicked in the last hour: {server.clicks_last_hour}</p>
                <p class="clicks-last-hour">Radio stations clicked in the last day: {server.clicks_last_day}</p>

                <p class="supported-version">Supported Version: {server.supported_version}</p>
                <p class="software-version">Software Version: {server.software_version}</p>
            </div>
        </div>
    )
}

export default ServerCard