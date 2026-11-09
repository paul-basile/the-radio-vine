function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1><a href="/">The Radio Vine</a></h1>
            </div>
            <div>
                <ul className="selections-list">
                    <li className="selection"><a href="/stations">Stations</a></li>
                    <li className="selection"><a href="/server">Server Stats</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar