import { Box, Stack, Paper, styled, Typography } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useNavigate } from "react-router-dom";

function ProductCard({ img, name, description, location, id }) {
  const navigate = useNavigate();

  const handleOnClick = () =>{
    navigate(`/product/${id}`)
  }


  const HouseBox = styled(Paper)(({ theme }) => ({
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",

    width: "250px",
    backgroundColor: "#fff",
    margin: theme.spacing(5),
  }));

  const InfoBox = styled(Box)(() => ({
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
  }));

  return (
    <HouseBox elevation={20} onClick={handleOnClick}>
      <img src={img} alt="housePhoto" style={{ width: "100%" }} />

      <Stack sx={{ padding: "1rem", flexGrow: "1" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          {description}
        </Typography>

        <InfoBox>
          <FmdGoodIcon />
          <Typography variant="body2">{location}</Typography>
        </InfoBox>
      </Stack>
    </HouseBox>
  );
}

export default ProductCard;
