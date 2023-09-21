import { createTheme, responsiveFontSizes } from "@mui/material"
import typography from "./typography"

 let theme = createTheme({
    palette: {
        text: "#341100",
        
        mode: "light",
        primary: {
            main:"#5d3424"
        },
        secondary:{
            main: "#8d6f5b"
        },
        tertiary:{
            main: "#341100"
        },
        background:{
            default: "#ede2da"
        },
        text: {
       
            secondary: "#EAC696"
        },
    }
    ,

    typography

})

theme = responsiveFontSizes(theme);

export default theme