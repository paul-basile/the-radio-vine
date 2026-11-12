import useFavorites from "../hooks/useFavorites";
import StationCard from "../components/StationCard";
import Navbar from '../components/Navbar'

function FavoriteStations() {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <div className="app">
            <Navbar />

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