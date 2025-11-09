import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Define keyframe animations for a dynamic entry
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component for the main container with a gradient background
const HeroContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(45deg, #FEFBF6 30%, #F0EBE3 90%)",
  padding: theme.spacing(10, 0),
  overflow: "hidden", // Ensures no overflow from animations
}));

// Styled component for the animated, gradient headline
const GradientTypography = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "900", // Bolder for more impact
  animation: `${fadeInUp} 1s ease-out`,
}));

// Styled component for the primary action button with custom styles
const StyledButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
  border: 0,
  borderRadius: 30, // Softer, rounded corners
  color: "white",
  height: 52,
  padding: "0 30px",
  boxShadow: "0 4px 15px 0 rgba(45, 96, 252, 0.4)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 6px 20px 0 rgba(45, 96, 252, 0.5)",
  },
  animation: `${fadeInUp} 1s ease-out 0.5s`,
  animationFillMode: 'backwards', // Ensures style is applied before animation starts
}));

// Wrapper for the image to apply shadow and animation
const ImageWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${fadeIn} 1.2s ease-in-out`,
  '& img': {
    width: '100%',
    maxWidth: '500px', // Prevents image from becoming too large
    height: 'auto',
    borderRadius: '16px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
  },
});

const Hero = () => {
  return (
    <HeroContainer id="about">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <GradientTypography variant="h2" gutterBottom>
              Roadside Help, Reimagined 🚗
            </GradientTypography>
            <Typography
              variant="h6"
              color="text.secondary"
              paragraph
              sx={{ animation: `${fadeInUp} 1s ease-out 0.3s`, animationFillMode: 'backwards', fontWeight: 400 }}
            >
              Our platform instantly connects you with verified mechanics and fuel stations.
              Whether it’s a breakdown, fuel shortage, or emergency, help is just a click away.
            </Typography>
            <StyledButton>
              Get Started
            </StyledButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageWrapper>
              <img
                src="https://img.freepik.com/free-vector/car-repair-service-illustration_335657-4662.jpg"
                alt="Roadside Assistance"
              />
            </ImageWrapper>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default Hero;