import useFavorites from "../hooks/useFavorites";
import StationCard from "../components/StationCard";
import { Link } from "react-router";

function FavoriteStations() {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <div className="app">
            <div className="navbar">
                <div className="logo">
                    <h1><Link to="/">The Radio Vine</Link></h1>
                </div>
                <div>
                    <ul className="selections-list">
                        <li><Link to="/stations">Stations</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                        <li><Link to="/server">Server Stats</Link></li>
                    </ul>
                </div>
            </div>

            {favorites.length === 0 ? (
                <p className="empty-message">
                    Add your favorite stations here!
                </p>
            ) : (
                <div className="station-container">
                    {favorites.map((station) => (
                        <StationCard
                            station={station}
                            key={station.stationuuid}
                            isFavorite={true}
                            onToggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavoriteStations;