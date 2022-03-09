import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { admin } from "../../redux/actions/doing";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const adminInfo = useSelector((state) => state.allProducts.admin);

  let attempt = 0;
  const handleSubmit = (event) => {
    event.preventDefault();
    attempt++;
    console.log(attempt);
    const data = new FormData(event.currentTarget);
    const adminData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (adminData.email === adminInfo.email) {
      navigate("/admin");
    } else if(attempt === 3) {
      navigate("/");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{ color: "white !important" }}
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              minWidth: "20px",
              color: "white",
              mr: "10px",
              p: "10px",
              border: "1px solid red",
              fontSize: { xs: "12px", sm: "15px" },
            }}
            color="error"
          >
            <LockOutlinedIcon />
          </Button>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ background: "transparent !important" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              sx={{
                minWidth: "20px",
                color: "white",
                m: "20px 0",
                p: "10px",
                border: "1px solid red",
                fontSize: { xs: "12px", sm: "15px" },
              }}
              type="submit"
              fullWidth
              color="error"
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.5) !important" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.5) !important" }}
                >
                  {"Don't have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright
          sx={{ mt: 8, mb: 4, color: "rgba(255,255,255,0.5) !important" }}
        />
      </Container>
    </ThemeProvider>
  );
}
