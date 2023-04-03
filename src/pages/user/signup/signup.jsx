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
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const signupButtonClicked = () => {

    const newUser = {
      email: email,
      name: name,
      password: password 
    }

    let userList = JSON.parse(localStorage.getItem('userlist')) || [];
    userList.push(newUser);

    // let userList = JSON.parse(localStorage.getItem('userlist'));
    // if (userList) {
    //   userList.push(newUser);
    // } else {
    //   userList = [newUser];
    // }

    localStorage.setItem('userlist', JSON.stringify(userList));

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
          label="Email"
          type="email"
          variant="outlined"
          placeholder="Enter your Email"
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
