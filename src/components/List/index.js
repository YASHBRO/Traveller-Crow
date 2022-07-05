import React, { createRef, useEffect, useState } from "react";
import {
    Box,
    CircularProgress,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";

import styles from "./style";
import PlaceDetails from "../PlaceDetails";

const List = ({
    mapType,
    setMapType,
    rating,
    setRating,
    places,
    childClicked,
    loading,
}) => {
    
    const [eleRefs, setEleRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length)
            .fill()
            .map((_, index) => eleRefs[index] || createRef());

        setEleRefs(refs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [places]);

    const handleMapTypeChange = (e) => {
        setMapType(e.target.value);
    };

    const handleRatinChange = (e) => {
        setRating(e.target.value);
    };

    return (
        <Box sx={styles.container}>
            <Typography variant="h4">
                <span style={styles.titleAccent}>Restraunts</span>,{" "}
                <span style={styles.titleAccent}>Hotels</span> &{" "}
                <span style={styles.titleAccent}>Attractions</span> around you
            </Typography>
            {loading ? (
                <Box sx={styles.loading}>
                    <CircularProgress size="5rem" />
                </Box>
            ) : (
                <>
                    <FormControl sx={styles.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={mapType} onChange={handleMapTypeChange}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={styles.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={handleRatinChange}>
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3</MenuItem>
                            <MenuItem value={4}>Above 4</MenuItem>
                            <MenuItem value={4.5}>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container sx={styles.list}>
                        {places?.map((place, index) => (
                            <Grid item xs={12} key={index}>
                                <PlaceDetails
                                    place={place}
                                    selected={Number(childClicked) === index}
                                    refProps={eleRefs[index]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Box>
    );
};

export default List;
