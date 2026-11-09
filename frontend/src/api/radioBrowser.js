const BASE_URL = "https://de1.api.radio-browser.info"

/* function to fetch all radio stations, JUST returns data */
/* fetch allows for api endpoints to be put into it, returning a response */

export const fetchAllStations = async () => {
    const response = await fetch(
        `${BASE_URL}/json/stations`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch stations.");
    }

    return response.json();
}


export const fetchServerStats = async () => {
    const response = await fetch(
        `${BASE_URL}/json/stats`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch server status.");
    }

    return response.json();
}