import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

const Partners = () => {
  const logos = [
    "https://dummyimage.com/100x100/000/fff.png&text=Shell",
    "https://dummyimage.com/100x100/000/fff.png&text=HP",
    "https://dummyimage.com/100x100/000/fff.png&text=Castrol",
    "https://dummyimage.com/100x100/000/fff.png&text=Bosch"
  ];

  return (
    <Box id="partners" sx={{ bgcolor: "#f5f5f5", py: 8 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Our Partners
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {logos.map((logo, i) => (
            <Grid item key={i}>
              <img src={logo} alt="partner logo" height={60} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Partners;
