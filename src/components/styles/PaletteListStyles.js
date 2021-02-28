import sizes from './sizes'
import bg from './bg.svg'
export default {
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#ffff00",
        /* background by SVGBackgrounds.com */
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        overflow: "scroll"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "75%"
        },
        [sizes.down("xs")]: {
            width: "60%"
        },
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",

        "& a": {
            textDecoration: "none",
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 23%)",
        gridGap: "2.5rem",
        [sizes.down("lg")]: {
            gridTemplateColumns: "repeat(3, 30%)",
        },
        [sizes.down("sm")]: {
            gridTemplateColumns: "repeat(2, 45%)",
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1rem"
        },
    }
}