import * as Yup from "yup";
import { Container, Avatar, Grid, Box, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { TextfieldWrapper as Textfield } from "./TextFieldWrapper";
import { ButtonWrapper as Button } from "./ButtonWrapper";
import { Link, useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Typography sx={{color: "inherit"}} component={Link} to={"/"} >Orberix </Typography>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email("Correo inválido").required("Obligatorio"),
  password: Yup.string().required("Obligatorio"),
});


export default function SignIn() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
    
        </Avatar>
        <Typography variant="h4" sx={{ color: "primary.main" , mb:3}}>
          Iniciar Sesion
        </Typography>
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            // navigate("/dashboard")
          }}
        >
          <Form>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <Textfield name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <Textfield name="password" label="Contraseña" type="password" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" sx={{color: "primary.main"}} component={Link} to={"/sign-up"} >¿No tienes una cuenta? ¡Registrate!</Typography>
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <Button  >Entrar</Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}