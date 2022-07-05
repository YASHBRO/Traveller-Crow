import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./style";

const Header = ({ setCoordinates }) => {
    const [autocomplete, setAutocomplete] = useState(null);

    const handleLoad = (autoC) => setAutocomplete(autoC);

    const handlePlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({ lat, lng });
    };

    return (
        <AppBar position="static">
            <Toolbar sx={styles.toolbar}>
                <Typography variant="h5" sx={styles.title}>
                    Traveller Crow
                </Typography>
                <Box display="flex" alignItems="center">
                    <Typography variant="h6" sx={styles.titleSecondary}>
                        Explore more
                    </Typography>
                    <Autocomplete
                        onLoad={handleLoad}
                        onPlaceChanged={handlePlaceChanged}
                    >
                        <Box sx={styles.search}>
                            <Box sx={styles.searchIcon}>
                                <SearchIcon />
                            </Box>
                            <InputBase
                                placeholder="Search..."
                                sx={{
                                    root: styles.inputRoot,
                                    input: styles.inputInput,
                                }}
                            />
                        </Box>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
