function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>The Radio Vine</h1>
            </div>
            <div>
                <ul className="selections-list">
                    <li><a href="/stations">Stations</a></li>
                    <li><a href="/server">Server Stats</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar