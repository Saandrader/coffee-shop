import { useParams } from "react-router-dom";
import { products } from "../utils/content";
import { Container, Grid, Stack, Typography } from "@mui/material";
import MainButton from "../components/MainButton";
import { useState } from "react";
import Counter from "./Counter";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { productId } = useParams();
  const { dispatch } = useCart();

  const product = products.find((product) => product.id === productId);
  const [quantity, setQuantity] = useState(1);
  const total = product.price * quantity;

  const addToCart = () =>
    dispatch({
      type: "add_product",
      payload: { ...product, quantity: quantity, total: total },
    });

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img
            src={product.img}
            alt="coffeePhoto"
            style={{
              width: "100%",
              borderRadius: "10px",
              position: "sticky",
              top: "100px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Stack direction={"column"} style={{ flex: "1", gap: "10px" }}>
            <Typography variant="h1" sx={{color:"tertiary.main"}}> {product.name} </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              ${product.price.toLocaleString()}
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
          </Stack>
          <Typography>Cantidad:</Typography>
          <Stack direction={"row"} sx={{mb:4}}>
          <Typography
            variant="h6"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            {total.toLocaleString()}$
          </Typography>
          <Counter
            setQuantity={(value) => setQuantity(value)}
            quantity={quantity}
            direction="row"
          />

          </Stack>
          

          <MainButton onClick={addToCart} sx={{ mb: 5, height: "50px" }}>
            Añadir al Carrito
          </MainButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
