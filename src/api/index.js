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
            "X-RapidAPI-Key":
                "9b32088caamsh30148e05a004a97p19460ajsnaf66c4e9f44b",
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
    };

    try {
        const res = await axios.request(URL, options);
        console.log("yd", res);
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export { getPlacesData };
