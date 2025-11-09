import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Motive = () => {
  return (
    <Box id="motive" sx={{ py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Motive
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We aim to make roadside assistance reliable, transparent, and accessible. 
          No more waiting endlessly or paying unfair charges—our verified partners 
          ensure quick and fair services anytime, anywhere.
        </Typography>
      </Container>
    </Box>
  );
};

export default Motive;
