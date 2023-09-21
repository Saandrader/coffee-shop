import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { section2Content } from "../content";

const { media, title, description } = section2Content;

function Section2() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    gap: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));
  return (
    <Box sx={{ py: 5, backgroundColor: "primary.main"}}>
      <Container>
        <CustomBox>
        <Stack sx={{ justifyContent: "center" }}>
            <Typography variant="h2" sx={{fontWeight:"bold", color:"secondary.main"}}> {title} </Typography>
            <Typography sx={{ mt: 1 , color:"background.default"}}> {description}</Typography>
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ImageList variant="mansory" sx={{ width: "80%"  }} cols={2} gap={8}>
              {media.map((item) => (
                <ImageListItem key={item.alt}>
                  <img src={item.img} alt={item.alt}   loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>

          
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Section2;
