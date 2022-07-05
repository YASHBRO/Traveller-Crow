const styles = {
    paper: {
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100px",
    },
    mapContainer: {
        height: "90vh",
        width: "100%",
    },
    markerContainer: {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        "&:hover": { zIndex: 2 },
    },
    markerImage: {
        height: "50px",
    },
    pointer: {
        cursor: "pointer",
    },
};

export default styles;
