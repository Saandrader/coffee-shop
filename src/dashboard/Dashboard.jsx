import { Container, Box, Stack, Typography, Grid, styled } from "@mui/material";
// import MainButton from "../components/MainButton";
import CoffeeButton from "./CoffeeButton";

const CustomGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  height: "120px"
}));

function Dashboard() {
  return (
    <Box>
      <Container sx={{ py: 10 }} maxWidth={"md"} >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
        <Typography sx={{mt:2}}>¡Bienvenido Usuario!</Typography>
        <Box sx={{ py: 5, }}>
          <Grid container spacing={4}  >
            <CustomGrid item md={4} xs={6}>
              <CoffeeButton>Funciones</CoffeeButton>
            </CustomGrid>

            <CustomGrid item md={4} xs={6}>
              <CoffeeButton>Funciones</CoffeeButton>
            </CustomGrid>
            <CustomGrid item md={4} xs={6}>
              <CoffeeButton>Funciones</CoffeeButton>
            </CustomGrid>
            <CustomGrid item md={4} xs={6}>
              <CoffeeButton>Funciones</CoffeeButton>
            </CustomGrid>

            <CustomGrid item md={4} xs={6}>
              <CoffeeButton>Funciones</CoffeeButton>
            </CustomGrid>
            <CustomGrid item md={4} xs={6}>
              <CoffeeButton>Funciones</CoffeeButton>
            </CustomGrid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Dashboard;
