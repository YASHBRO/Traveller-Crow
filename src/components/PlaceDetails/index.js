import React from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Rating,
    Typography,
} from "@mui/material";
import LocationOn from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

import styles from "./style";

const stockImage = require("../../assests/london-stock.jpg");

const PlaceDetails = ({ place, selected, refProps }) => {
    if (selected) {
        refProps?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <Card elevation={6} sx={styles.card}>
            <CardMedia
                style={{ height: 300 }}
                image={place.photo ? place.photo.images.large.url : stockImage}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {place.name}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating value={place.rating} readOnly />
                    <Typography gutterBottom variant="subtitle1">
                        out of {place.num_reviews} reviews
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.price_level}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.ranking}
                    </Typography>
                </Box>
                {place?.cuisine?.map(({ name }) => (
                    <Chip
                        key={name}
                        size="small"
                        label={name}
                        sx={styles.chip}
                    />
                ))}
                {place?.address && (
                    <Typography
                        gutterBottom
                        variant="subtitle2"
                        color="textSecondary"
                        sx={styles.subtitle}
                    >
                        <LocationOn />
                        {place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography
                        gutterBottom
                        variant="subtitle2"
                        color="textSecondary"
                        sx={styles.subtitle}
                    >
                        <PhoneIcon />
                        {place.phone}
                    </Typography>
                )}

                <CardActions sx={styles.actionButtons}>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => window.open(place.web_url, "_blank")}
                    >
                        Trip Advisor
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => window.open(place.webiste, "_blank")}
                    >
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default PlaceDetails;
