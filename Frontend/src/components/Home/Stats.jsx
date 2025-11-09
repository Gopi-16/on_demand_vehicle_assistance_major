import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";

const Stats = () => {
  const stats = [
    { number: "5K+", label: "Happy Users" },
    { number: "1K+", label: "Verified Mechanics" },
    { number: "3K+", label: "Fuel Deliveries" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <Box id="stats" sx={{ bgcolor: "#f5f5f5", py: 8 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((s, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {s.number}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {s.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
