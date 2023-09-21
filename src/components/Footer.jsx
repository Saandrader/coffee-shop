import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import { footerContent } from "/src/utils/content.js";

const { contact } = footerContent;

function Footer() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Productos
            </Typography>

            <FooterLink>bla</FooterLink>
            <br />
            <FooterLink>bla</FooterLink>
            <br />
            <FooterLink>bla</FooterLink>
            <br />
            <FooterLink>bla</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Media
            </Typography>

            <FooterLink>Casas</FooterLink>
            <br />
            <FooterLink>Molederos</FooterLink>
            <br />
            <FooterLink>Videos</FooterLink>
            <br />
            <FooterLink>etc</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Orberix
            </Typography>

            <FooterLink>Bla</FooterLink>
            <br />
            <FooterLink>bla</FooterLink>
            <br />
            <FooterLink>codigo</FooterLink>
            <br />
            <FooterLink>bla</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
             Contacto
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              {contact}
            </Typography>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;