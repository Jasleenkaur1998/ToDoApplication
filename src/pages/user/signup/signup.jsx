import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/button/Button";

export default function Signup(props) {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const signupButtonClicked = () => {
    navigate("/user/login");
  };

  return (
    <>
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="20px"
        backgroundColor="aquamarine"
      >
        <h1>Please enter your details to Signup</h1>
        <TextField
          id="standard-basic"
          label="Name"
          variant="outlined"
          placeholder="Enter your name"
          onChange={handleName}
        />
        <TextField
          id="standard-basic"
          label="Username"
          variant="outlined"
          placeholder="Enter your username"
          onChange={handleEmail}
        />
        <TextField
          id="standard-basic"
          label="password"
          variant="outlined"
          type="password"
          placeholder="Enter your password"
          onChange={handlePassword}
        />
        <CustomButton
          title="Sign up"
          variant="contained"
          handleClick={signupButtonClicked}
          color="primary"
        >
          Sign UP
        </CustomButton>
      </Box>
    </>
  );
}
