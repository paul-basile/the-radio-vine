
import { Link } from "react-router"

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1><Link to="/">The Radio Vine</Link></h1>
            </div>
            <div>
                <ul className="selections-list">
                    <li className="selection"><Link to="/stations">Stations</Link></li>
                    <li className="selection"><Link to="/favorites">Favorites</Link></li>
                    <li className="selection"><Link to="/server">Server Stats</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar