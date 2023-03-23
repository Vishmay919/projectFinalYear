import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { auth } from '../../../../firebase';
  
import {Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Input,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Dashboard from "./Dashboard";



const Title = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  fontWeight: 700,
  fontFamily: "Poppins, sans-serif",
  color: "#0F0F0F",
  marginBottom: "8px",
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  fontFamily: "Poppins, sans-serif",
  color: "red",
  marginTop: "8px",
}));

const AdminPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(`Error Occured: Incorrect Email or Password`)
      });

  };

  return (
  <>
      {!user ? (
    <Container sx={{ padding:"8rem 0"}}>
      <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Log In
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          </Box>
        </Box>
       
    </Container>): 
    (
      <Dashboard />
    )}
</>  
);

}

export default AdminPage;
