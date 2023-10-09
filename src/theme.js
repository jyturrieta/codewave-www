import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#004177",
            contrastText: "#ffffff"
            
        },
        secondary: {
            main: "#00a4ca"
        },
        relaxed: {
            main: "#57a52d"  
        },
        black: {
            main: "#000000"
        },
        white: {
            main: "#ffffff"
        },
        grey: {
            main: "#777779"
        }
    },
    typography: {
        fontFamily: "Montserrat",
    }
});

export default theme;