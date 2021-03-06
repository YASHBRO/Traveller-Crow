import axios from "axios";

const getPlacesData = async ({ bounds: { ne, sw }, mapType }) => {
    const URL = `https://travel-advisor.p.rapidapi.com/${mapType}/list-in-boundary`;

    const options = {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
        },
        headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
    };

    try {
        const res = await axios.request(URL, options);
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

const getPlacesWeather = async ({ lat, lng }) => {
    const URL = "https://community-open-weather-map.p.rapidapi.com/find";

    const options = {
        params: {
            lat: lat,
            lon: lng,
        },
        headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
            "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        },
    };

    try {
        const res = await axios.request(URL, options);
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export { getPlacesData, getPlacesWeather };
