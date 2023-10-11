import {
    Typography,

    Button,

    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import { useNavigate, useLocation } from "react-router-dom";
  import DrawerComp from "./Drawer";

function ConditionalComponents() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
    const navigate = useNavigate();
    const location = useLocation().pathname
    console.log(location)
    let bInfo = {text: "Iniciar Sesion", to: "/sign-in", show: true}
  
    switch(location){
      case "/sign-in":
        bInfo.show = false
      case "/dashboard":
        bInfo.text = "Cerrar Sesion"
        bInfo.to = "/"
    }
    
    return (
      <>
        {isMobile ? (
          <>
            <Typography
              variant="h5"
              to="/"
              component={Link}
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Caramel Bourborn Coffee
            </Typography>
            {bInfo.show && <Button
              variant="contained"
              sx={{ mx: 2 }}
              onClick={() => navigate(bInfo.to)}
            >
             {bInfo.text}
            </Button>}
            
          </>
        ) : (
          <DrawerComp data={bInfo} />
        )}
      </>
    );
  }
  
  export default ConditionalComponents;