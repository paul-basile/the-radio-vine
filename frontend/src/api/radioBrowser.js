import { cache } from "react";

const BASE_URL = "https://de1.api.radio-browser.info"

/* function to fetch all radio stations, JUST returns data */
/* fetch allows for api endpoints to be put into it, returning a response */

let cachedStations = null;
let cachedSeverStatus = null;
export const fetchAllStations = async () => {
    if (cachedStations) return cachedStations;
    const response = await fetch(
        `${BASE_URL}/json/stations`
    );
    cachedStations = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch stations.");
    }

    return cachedStations;
}


export const fetchServerStats = async () => {
    if (cachedSeverStatus) return cachedSeverStatus;
    const response = await fetch(
        `${BASE_URL}/json/stats`
    );
    cachedSeverStatus = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch server status.");
    }

    return cachedSeverStatus;
}