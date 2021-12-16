import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    contentArea: {
        textAlign: "center",
        color : "#FFF",
    },
    
    h1: {
        paddingBottom: "150px",
    },

    p: {
        display: "none",
        "&:target": {
            display: "block",
        },
    },

    button: {
        borderRadius: "5px",
        backgroundColor: "#3A3A3D",
        color: "#FFF",
        border: 0,
        cursor: "pointer",
        outline: 0,
        height: "40px",
        width: "150px",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: "#464649",
        }
    },
});