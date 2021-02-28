export default {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: 1
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden",
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    edit: {
        transition: "all 0.3s ease-in-out",
        marginRight: "2px",
        color: "white",
        backgroundColor: "#eb3d30",
        position: "absolute",
        left: "2px",
        top: "4px",
        zIndex: 10,
        opacity: 1,
        "&:hover": {
            transform: "scale(1.3)"
        }
    },
    delete: {
        transition: "all 0.3s ease-in-out",
        marginRight: "2px",
        color: "white",
        backgroundColor: "#eb3d30",
        position: "absolute",
        right: "2px",
        top: "4px",
        zIndex: 10,
        opacity: 1,
        "&:hover": {
            transform: "scale(1.3)"
        }
    }
}