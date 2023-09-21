import { Box, Container, styled, Typography } from "@mui/material";
import ProductCard from "../ProductCard";
import { section3Content } from "../content";
import { TitleOutlined } from "@mui/icons-material";

const {products, title, description} = section3Content

function Section3() {
    const PropertiesBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: theme.spacing(10),
        marginTop: theme.spacing(5),
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      }));
    
      const PropertiesTextBox = styled(Box)(({ theme }) => ({

          textAlign: "center",

      }));
    
      return (
        <Box sx={{ mt: 5, py: 10 }}>
          <Container sx={{width: "80vw"}}>
            <PropertiesTextBox>
              <Typography variant="h2"
                sx={{ color: "tertiary.main", fontWeight: "bold" }}
              >
                {title}
              </Typography>
              <Typography sx={{ color: "secondary.main", fontSize: "16px", mt: 1 }}>
                {description}
              </Typography>
            </PropertiesTextBox>
    
            <PropertiesBox>
              {products.map((product) => (
                <ProductCard
                  key={product.name}
                  img={product.img}
                  name={product.name}
                  description={product.description}
                  location={product.location}
                  id={product.id}
             
                />
              ))}
            </PropertiesBox>
          </Container>
        </Box>
      );
}

export default Section3;