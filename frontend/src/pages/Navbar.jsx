function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>The Radio Vine</h1>
            </div>
            <div>
                <ul className="selections-list">
                    <li>About</li>
                    <li><a href="">Stations</a></li>
                    <li><a href="">Server Stats</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar