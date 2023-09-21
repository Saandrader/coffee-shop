import { Button, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function Counter({ setQuantity, quantity, direction }) {
  const handleQuantity = (value) => {
    if (quantity != 1 || value > 0) setQuantity(quantity + value);
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        flexDirection: direction,
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <Button onClick={() => handleQuantity(-1)}>
        <RemoveIcon />
      </Button>
      <Typography>{quantity}</Typography>
      <Button onClick={() => handleQuantity(1)}>
        <AddIcon />
      </Button>
    </Stack>

  );
}

export default Counter;
