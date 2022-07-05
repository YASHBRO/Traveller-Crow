import { alpha } from "@mui/material";

const styles = {
    titleSecondary: {
        display: {
            xs: "None",
            sm: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: 1,
        bgcolor: (theme) => alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.common.white, 0.25),
        },
        px: 1,
        marginRight: 2,
        marginLeft: { xs: 0, sm: 3 },
        width: { xs: "100%", sm: "auto" },
    },
    searchIcon: {
        py: 2,
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: 1,
        paddingLeft: 4,
        width: { xs: "100%", md: "20ch" },
        color: "common.white",
        "&::placeholder": {
            color: "common.white",
        },
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
};

export default styles;
