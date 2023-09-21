import { Stack, Button, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

function MainButton({ children, sx = {}, ...props }) {
  return (
    <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
      <Stack spacing={1} direction={"row"} alignItems={"center"}>
        <Typography variant="body2">{children}</Typography>
        <StorefrontIcon />
      </Stack>
    </Button>
  );
}

export default MainButton;
