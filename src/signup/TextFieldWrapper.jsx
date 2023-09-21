import { TextField } from "@mui/material";
import { useField } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { InputAdornment, IconButton } from "@mui/material";

function TextfieldWrapper({ name, type, ...otherProps }) {
  const [field, mata] = useField(name);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }
  if (name == "password" || name == "passwordConfirmation") {
    configTextfield.type = showPassword ? "text" : "password";
    configTextfield.InputProps = {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    };
  }



  return (
    <TextField
    sx={{
      "& .MuiFormLabel-root": {
          color: 'secondary.main'
      },
  }}
      {...configTextfield}
    />
  );
}

export { TextfieldWrapper };
