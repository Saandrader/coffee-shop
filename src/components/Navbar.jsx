import {
  AppBar,
  Container,
  Stack,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Badge,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useScrollPosition from "../hooks/useScrollPosition";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import DrawerComp from "./Drawer";

function Navbar() {
  const scrollPosition = useScrollPosition();
  const { toggleCart, cart } = useCart();
  const navigate = useNavigate();
  const count = cart.length;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

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
            sx={{height:72}}
          >
            <Link to="/" style={{ height: "100%", padding: "10px"}}>
              <img
                src={"/logos.png"}
                style={{ height: "100%"}}
              />
            </Link>
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
                <Button
                  variant="contained"
                  sx={{ mx: 2 }}
                  onClick={() => navigate("sign-up")}
                >
                  Registrarse
                </Button>
              </>
            ) : (
              <DrawerComp />
            )}

            {/* </Link> */}

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
