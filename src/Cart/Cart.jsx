import {
  Box,
  Button,
  Stack,
  Typography,
  styled,
  Modal,
  Paper,
  Divider,
  IconButton,
  Grid,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useCart } from "../context/CartContext";

import Item from "./Item";

function Cart({ isOpen }) {
  const { toggleCart, cart } = useCart();

  const total = cart.reduce(
    (res, product) => res + product.price * product.quantity,
    0
  );

  const BoxModal = styled(Paper)(({ theme }) => ({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "80vh",
    width: "80vw",
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {
      width: "70vw",
    },
  }));

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => toggleCart(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxModal>
          <Box sx={{ p: 2, flex: "1", overflowY: "auto", overflowX: "hidden" }}>
            <Stack direction={"row"}>
              <Typography
                id="modal-modal-title"
                sx={{ color: "tertiary.main", fontWeight: "bold", flexGrow: 1 }}
                variant="h2"
              >
                Carrito
              </Typography>
              <IconButton sx={{height:"100%"}} onClick={() => toggleCart(false)}>
                <ClearIcon />
              </IconButton>
            </Stack>

            <Stack
              divider={
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{ width: "95%" }}
                />
              }
              spacing={2}
              sx={{ mt: 3 }}
            >
              {cart.map((product) => {
                return <Item product={product} />;
              })}
            </Stack>
          </Box>
          <Paper elevation={20} sx={{ backgroundColor: "primary.light" }}>
            <Grid container sx={{ alignItems: "center", p: 2 }}>
              <Grid
                item
                xs={8}
                md={7}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Button variant="contained">
                  <Typography variant="body2">Hacer Pedido</Typography>
                </Button>
                <Typography
                  variant="h6"
                  sx={{ mx: 1, color: "background.default" }}
                >
                  Total:
                </Typography>
              </Grid>
              <Grid item xs={4} md={5}>
                <Typography
                  variant="h5"
                  sx={{ color: "tertiary.main", fontWeight: "bold" }}
                >
                  {total.toLocaleString()}$
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </BoxModal>
      </Modal>
    </div>
  );
}

export default Cart;
