import { createTheme, responsiveFontSizes } from "@mui/material"
import typography from "./typography"
import { primary, secondary, tertiary } from "./variables";

 let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: primary
        },
        secondary:{
            main: secondary
        },
        tertiary:{
            main: tertiary
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