import {
  AppBar,
  Container,
  Stack,
  Toolbar,
  IconButton,
  Badge,
  Snackbar,
  Alert,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useScrollPosition from "../hooks/useScrollPosition";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import  ConditionalComponents  from "./ConditionalComponents";
import { useState } from "react";

function Navbar() {
  const scrollPosition = useScrollPosition();
  const { toggleCart, cart } = useCart();
  const count = cart.length;

  const [openNoti, setOpenNoti] = useState(false);

  const handleClickCart = () => {
    if(cart.length == 0)
      setOpenNoti(true);
    else{
      toggleCart(true)
    }
  };

  return (
    <>
      <AppBar
        sx={{
          boxShadow: scrollPosition > 10 ? 5 : 0,

          bgcolor: "secondary.main",
        }}
      >
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ height: 72 }}
          >
            <Link to="/" style={{ height: "100%", padding: "10px" }}>
              <img src={"/logos.png"} style={{ height: "100%" }} />
            </Link>
            <ConditionalComponents />

            <IconButton
              sx={{ mx: 1, color: "background.default" }}
              aria-label="cart"
              onClick={handleClickCart}
            >
              <Badge
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                color="tertiary"
                badgeContent={count}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Container>
      </AppBar>
      <Toolbar />
      <Snackbar
       anchorOrigin={{
        vertical: 'top', // Muestra la notificación en la parte superior
        horizontal: 'center', // Centra horizontalmente
      }}
      
        open={openNoti}
        autoHideDuration={2000}
        onClose={() => {
          setOpenNoti(false);
        }}
      >
        <Alert severity="success" icon={false}>El carrito está vácio.</Alert>
      </Snackbar>
    </>
  );
}

export default Navbar;
