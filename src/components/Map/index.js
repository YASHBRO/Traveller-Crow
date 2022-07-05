import React from "react";
import GoogleMapReact from "google-map-react";
import { Box, Paper, Rating, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import styles from "./style";

const stockImage = require("../../assests/london-stock.jpg");

const Map = ({
    coordinates,
    setCoordinates,
    setBounds,
    places,
    setChildClicked,
}) => {
    const isDesktop = useMediaQuery("(min-width:600px");

    const handleMapChange = (e) => {
        console.log("yd map change");
        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
    };

    return (
        <Box sx={styles.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyC9_2xr8n8DStmvlFg_QXbHS5lfEhm82sI",
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                onChange={handleMapChange}
                onChildClick={(child) => {
                    setChildClicked(child);
                }}
            >
                {places?.map((place, index) => (
                    <Box
                        variant="div"
                        sx={styles.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={index}
                    >
                        {isDesktop ? (
                            <Paper elevation={3} sx={styles.paper}>
                                <Typography sx={styles.typography}>
                                    {place.name}
                                </Typography>
                                <img
                                    style={styles.markerImage}
                                    src={
                                        place.photo
                                            ? place.photo.images.large.url
                                            : stockImage
                                    }
                                    alt={place.name}
                                />
                                {place?.rating && (
                                    <Rating
                                        size="small"
                                        value={Number(place.rating)}
                                        readOnly
                                    />
                                )}
                            </Paper>
                        ) : (
                            <LocationOnIcon color="primary" fontSize="large" />
                        )}
                    </Box>
                ))}
            </GoogleMapReact>
        </Box>
    );
};

export default Map;
