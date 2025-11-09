import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Services = () => {
  const services = [
    { icon: <BuildIcon fontSize="large" color="primary" />, title: "On-Site Repair", desc: "Get quick repairs from nearby mechanics." },
    { icon: <LocalGasStationIcon fontSize="large" color="primary" />, title: "Fuel Delivery", desc: "Never run out of fuel on the road again." },
    { icon: <DirectionsCarIcon fontSize="large" color="primary" />, title: "Breakdown Help", desc: "Assistance for towing and emergencies." },
    { icon: <SupportAgentIcon fontSize="large" color="primary" />, title: "24/7 Support", desc: "Our team is always available to assist you." },
  ];

  return (
    <Box id="services" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Services We Provide
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((s, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center", height: "100%" }}>
                <Box>{s.icon}</Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
