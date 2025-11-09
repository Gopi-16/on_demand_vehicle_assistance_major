import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box
} from "@mui/material";

const Login = () => {
  const [username, setuserName] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password: Password };

    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", data);
      const { token } = response.data;
      localStorage.setItem("token", token);
      window.location.href = "/profile";
      console.log("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    // <div></div>

    <Container maxWidth="xs" sx={{ mt: 8 }}>
       <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Email or Mobile"
            placeholder="Enter your email or mobile"
            margin="normal"
            value={username}
            onChange={(e) => setuserName(e.target.value)}
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            margin="normal"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, py: 1.2, borderRadius: 2 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Paper> 

    </Container>
  );
};

export default Login;
