import {
  Box,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { section1Content } from "../content";
import MainButton from "../../components/MainButton";

const { title, subtitle, textButton, heroImg } = section1Content;

function Section1() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    color: theme.palette.tertiary.main,
    margin: theme.spacing(15, 0, 4, 0),
  }));

  return (
    <Box sx={{ backgroundColor: "secondary.main", minHeight: "80vh" }}>
      <Container sx={{width: "80vw"}}>
        {/* <Navbar /> */}
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Title variant="h1">{title}</Title>
            <Typography sx={{ fontSize: "18px", color: "primary.main", my: 4 }}>
              {subtitle}
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={"center"}
            >
              {" "}
              <MainButton
                sx={{
                  height: { xs: 40, sm: 50 },
                  width: { xs: 300, md: "auto" },
                  mt: 2,
                }}
              >
                {textButton}
              </MainButton>
            </Stack>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}
export default Section1;
