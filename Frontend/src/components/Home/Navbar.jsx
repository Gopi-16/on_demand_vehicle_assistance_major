import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token")); // check login

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // redirect to login page
  };

  // Dynamic menu
  const menuItems = [
    ["Home", ""],
    ["Services", "services"],
    ["Register", "register"],
    ["About", "about"],
    ["Profile", "profile"]
  ];

  return (
    <AppBar position="sticky" sx={{ background: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          OnRoadAssist
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {menuItems.map(([label, route]) => (
            <Button key={route} color="inherit">
              <Link to={`/${route}`} style={{ color: "white", textDecoration: "none" }}>
                {label}
              </Link>
            </Button>
          ))}

          {/* ✅ Show Login OR Logout based on user login state */}
          {!isLoggedIn ? (
            <Button color="inherit">
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
                Login
              </Link>
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
