import * as Yup from "yup";
import { Container, Avatar, Grid, Box, Link, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { TextfieldWrapper as Textfield } from "./TextFieldWrapper";
import { ButtonWrapper as Button } from "./ButtonWrapper";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Café
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().test(
    "passwords-match",
    "Passwords must match",
    function (value) {
      return this.parent.password === value;
    }
  ),
});

export default function SignUp() {
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
          Crear Cuenta
        </Typography>
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Grid container spacing={2}>

              <Grid item xs={6}>
                <Textfield name="firstName" label="Nombre" />
              </Grid>

              <Grid item xs={6}>
                <Textfield name="lastName" label="Apellido" />
              </Grid>

              <Grid item xs={12}>
                <Textfield name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <Textfield name="password" label="Contraseña" type="password" />
              </Grid>
              <Grid item xs={12}>
                <Textfield
                  name="passwordConfirmation"
                  label="Repetir contraseña"
                  type="password"
                />
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <Button>Registrarse</Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
