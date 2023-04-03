import Box from "@mui/material/Box";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import React from "react";
import CustomButton from "../button/Button";

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogoutButton = () => {
    navigate("/user/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome To Home!
          </Typography>
          <CustomButton
            title="Log Out"
            variant="contained"
            handleClick={handleLogoutButton}
            color="warning"
            styleConfig={{ margin: "10px" }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
