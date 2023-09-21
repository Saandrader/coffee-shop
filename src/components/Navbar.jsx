import {
  AppBar,
  Container,
  Box,
  Stack,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useScrollPosition from "../hooks/useScrollPosition";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const scrollPosition = useScrollPosition();
  const { toggleCart, cart } = useCart();
  const navigate = useNavigate();
  const count = cart.length;

  return (
    <>
      <AppBar
        sx={{
          boxShadow: scrollPosition > 10 ? 5 : 0,

          height: 72,
          bgcolor: "secondary.main",
        }}
      >
        <Container height={"100%"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            // flexWrap={"wrap"}
          >
            <Link to="/">
              <img
                src={"/logos.png"}
                style={{ height: 71, objectFit: "contain" }}
              />
            </Link>
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
            {/* </Link> */}

            <Button variant="contained" sx={{mx:2}} onClick={()=> navigate("sign-up")}>Registrarse</Button>

            <IconButton
              sx={{ px: 2, color: "background.default" }}
              aria-label="cart"
              onClick={() => toggleCart(true)}
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
    </>
  );
}

export default Navbar;
