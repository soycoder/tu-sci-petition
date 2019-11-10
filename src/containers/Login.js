import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';


  
export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    // console.log(username +" "+ password);
    event.preventDefault();
    axios.post('http://localhost:3002/login', {
      
      "UserName": username,
      "PassWord": password
  
    })
    .then(function (response) {
      if(response.data.message == "Success") alert(response.data.displayname_th + " เข้าสู่ระบบ")
      else if(response.data.message=="User or Password Invalid!") alert("Username หรือ Password ไม่ถูกต้อง!")
      
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}