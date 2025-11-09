import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register_user = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [type, setType] = useState("user");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [vehicle_number, setVehicle] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email";

    if (!mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(mobile))
      newErrors.mobile = "Mobile must be 10 digits";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (type === "user") {
      if (!vehicle_number.trim())
        newErrors.vehicle_number = "Vehicle number is required";
      else if (!/^[A-Z]{2}\s?\d{2}\s?[A-Z]{1,2}\s?\d{4}$/i.test(vehicle_number))
        newErrors.vehicle_number = "Invalid vehicle number format";
    }

    if (type === "mechanic" && !address.trim())
      newErrors.address = "Please fetch your location";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  

  if (!validateForm()) return;

  try {
    // Send OTP first
    const res = await axios.post("http://localhost:8000/api/auth/sendotp", {
      email
    });

    console.log("OTP Sent:", res.data);

    // Navigate to OTP page with user data
    navigate("/verify-email", {
      state: {
        email,
        mobile,
        type,
        password,
        address,
        username: name,
        vehicle_number,
        latitude,
        longitude,
      }
    });
  } catch (err) {
    console.error("navigation error:", err);
  }
};


  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLatitude(lat);
          setLongitude(lon);

          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );
            const data = await res.json();
            if (data && data.display_name) {
              setAddress(data.display_name);
            } else {
              setAddress("Address not found");
            }
          } catch (error) {
            console.error("Error fetching address:", error);
            setAddress("Error fetching address");
          }
        },
        (error) => {
          console.error("Geolocation Error:", error);
          setAddress("Location access denied");
        }
      );
    } else {
      setAddress("Geolocation not supported");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ width: 450, boxShadow: 5, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" mb={2} textAlign="center" fontWeight="bold">
            Register User
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
            />

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              fullWidth
              label="Mobile"
              margin="normal"
              onChange={(e) => setMobile(e.target.value)}
              error={!!errors.mobile}
              helperText={errors.mobile}
            />

            <TextField
              select
              fullWidth
              label="User Type"
              margin="normal"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="mechanic">Mechanic</MenuItem>
            </TextField>

            {type === "mechanic" && (
              <>
                <TextField
                  fullWidth
                  label="Address"
                  margin="normal"
                  value={address}
                  InputProps={{ readOnly: true }}
                  error={!!errors.address}
                  helperText={errors.address}
                />

                <Button variant="contained" fullWidth sx={{ mt: 1 }} onClick={getLocation}>
                  Get Location
                </Button>

                {latitude && longitude && (
                  <Typography sx={{ mt: 1, fontSize: "14px", color: "#555" }}>
                    📍 Latitude: {latitude}, Longitude: {longitude}
                  </Typography>
                )}
              </>
            )}

            {type === "user" && (
              <TextField
                fullWidth
                label="Vehicle Number"
                margin="normal"
                onChange={(e) => setVehicle(e.target.value)}
                error={!!errors.vehicle_number}
                helperText={errors.vehicle_number}
              />
            )}

            {/* 👁️ Password with toggle */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, py: 1.2, fontSize: "16px" }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register_user;
