import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Stack
} from "@mui/material";

const ServiceForm = () => {
  const [username, setuserName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [mobile, setMobile] = useState("");
  const [vehicle_number, setVehicle] = useState("");
  const [repair_msg, setRepair_msg] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const data = { username, latitude, longitude, mobile, vehicle_number, repair_msg, createdAt: date };
    console.log(data);
    try {
      const response = await axios.post("http://localhost:8000/api/auth/service", data);
      console.log("Service request submitted:", response.data);
    } catch (error) {
      console.error("Error submitting service request:", error);
    }
  };

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          Vehicle Assistance Form
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Name"
              id="name"
              name="name"
              fullWidth
              required
              onChange={(e) => setuserName(e.target.value)}
            />

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Location:</Typography>
              <Button variant="outlined" onClick={handleGetLocation}>
                Get Location
              </Button>
            </Box>

            <TextField
              label="Latitude"
              id="latitude"
              name="latitude"
              fullWidth
              value={latitude}
              InputProps={{ readOnly: true }}
            />

            <TextField
              label="Longitude"
              id="longitude"
              name="longitude"
              fullWidth
              value={longitude}
              InputProps={{ readOnly: true }}
            />

            <TextField
              label="Mobile"
              id="mobile"
              name="mobile"
              fullWidth
              required
              onChange={(e) => setMobile(e.target.value)}
            />

            <TextField
              label="Vehicle Number"
              id="vehicle_number"
              name="vehicle_number"
              fullWidth
              onChange={(e) => setVehicle(e.target.value)}
            />

            <TextField
              label="Repair Message"
              id="repair_msg"
              name="repair_msg"
              fullWidth
              multiline
              rows={3}
              onChange={(e) => setRepair_msg(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ py: 1.2, borderRadius: 2, mt: 1 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default ServiceForm;
