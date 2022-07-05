import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Header from "../../components/Header";
import List from "../../components/List";
import Map from "../../components/Map";
import { getPlacesData } from "../../api";

const Home = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({ lat: 28, lng: 79 });
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [mapType, setMapType] = useState("restaurants");
    const [rating, setRating] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude });
            },
            () => {
                alert("Please allow access to your location");
            },
            { timeout: 5000 }
        );
    }, []);

    useEffect(() => {
        const filtered = places.filter((place) => place.rating >= rating);
        setFilteredPlaces(filtered);
    }, [places, rating]);

    useEffect(() => {
        if (!bounds.ne || !bounds.sw) {
            return;
        }
        setLoading(true);
        getPlacesData({ bounds, mapType })
            .then((res) => {
                setPlaces(
                    res.data?.filter(
                        (place) => place.name && place.num_review > 0
                    )
                );
                setFilteredPlaces([]);
            })
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bounds, mapType]);

    return (
        <>
            <Header setCoordinates={setCoordinates} />
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <List
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        loading={loading}
                        mapType={mapType}
                        setMapType={setMapType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
