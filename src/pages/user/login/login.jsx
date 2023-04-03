import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import classes from "./login.module.css";
import CustomButton from "../../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 // React router gives a hook where we can programmatically send a user to different page
 const navigate = useNavigate();

  const loginButtonClicked = (e) => {
    console.log('called');
    e.preventDefault();

    let userList = JSON.parse(localStorage.getItem('userlist'));
    
    // for (let i = 0 ; i < userList.length; i++) {
    //   if (userList[i].email === email) {
    //     if (userList[i].password === password) {
    //       navigate('/user/home');
    //       alert('Logged In succesfully');
    //       break;
    //     } else {
    //       alert("Incorrect Password");
    //       break;
    //     }
    //   } else {
    //     alert("user not found");
    //     break;
    //   }
    // }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="20px"
      backgroundColor="aquamarine"
    >
      <h1>Welcome, You may login here!</h1>
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        className={classes.textFields}
        placeholder="Enter your email"
        required
        onChange={handleEmail}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        className={classes.textFields}
        placeholder="Enter your Password"
        required
        onChange={handlePassword}
      />

      <Link to="/user/signup">Don't have an account ?</Link>

      <CustomButton
        title="Sign in"
        variant="contained"
        handleClick={loginButtonClicked}
        color="warning"
        styleConfig={{
          width: "300px",
        }}
      />
    </Box>
  );
}
