import sizes from './sizes'
import chroma from 'chroma-js'

export default {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5.2px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.3)"
          },
        [sizes.down("lg")] : {
            height: "20%",
            width: "25%"
        },
        [sizes.down("md")] : {
            height: "10%",
            width: "50%"
        },
        [sizes.down("xs")] : {
            height: "5%",
            width: "100%"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: props => chroma(props.color).luminance() >= 0.09 ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.8)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
      },
      delete: {
        transition: "all 0.3s ease-in-out",
      }
}