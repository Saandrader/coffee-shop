import { Typography, IconButton, Grid } from "@mui/material";

import Counter from "../product/Counter";
import ClearIcon from "@mui/icons-material/Clear";
import { useCart } from "../context/CartContext";

function Item({ product }) {
  const { dispatch } = useCart();
  const onDelete = (product) => dispatch({ type: "delete_product", payload: product });
  const handleQuantity = (quantity, product) => {
    const total = product.price * quantity;
    dispatch({
      type: "edit_product",
      payload: { ...product, total: total, quantity: quantity },
    });
  };
  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Grid
        item
        xs={2}
        md={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Counter
          setQuantity={(q) => handleQuantity(q, product)}
          quantity={product.quantity}
          direction={{ xs: "column-reverse", md: "row" }}
        ></Counter>
      </Grid>
      <Grid item xs={2} md={1}>
        <img
          src={product.img}
          alt="coffeePhoto"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </Grid>
      <Grid item xs={6} md={8} container sx={{ px: 1, alignItems: "center" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography>
            {product.price.toLocaleString()}$ x {product.quantity}
          </Typography>
        </Grid>
        <Grid md={6} item>
          <Typography
            variant="h6"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            {product.total.toLocaleString()}$
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={2} md={1}>
        <IconButton onClick={() => onDelete(product)} sx={{ p: 0 }}>
          <ClearIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Item;
