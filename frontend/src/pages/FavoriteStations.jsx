import useFavorites from "../hooks/useFavorites";
import StationCard from "../components/StationCard";

function FavoriteStations() {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <div className="app">
            <div className="navbar">
                <div className="logo">
                    <h1><a href="/">The Radio Vine</a></h1>
                </div>
                <div>
                    <ul className="selections-list">
                        <li><a href="/stations">Stations</a></li>
                        <li><a href="/favorites">Favorites</a></li>
                        <li><a href="/server">Server Stats</a></li>
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