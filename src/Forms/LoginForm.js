import React, { useState , useEffect } from 'react';
import { useNavigate } from "react-router";
import { Form, Button } from 'react-bootstrap';
import './LoginForm.css'


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate()
  useEffect (()=>{
    if(!localStorage.getItem('auth')) navigate("/login");
    //eslint-disable-next-line
}, []);

    const handleSubmit = () => {

    console.log("entered")
    if (username === 'admin' && password ==='password') {
      //authentication succesfully
        navigate("/home")
        localStorage.setItem("auth", true)
        console.log("enter sucessfully")
    } else {
      alert ("Invalid Username or Password")
    }
    setValidated(true);

  }


  return (
    <div className="login-form">
      <h2>Login</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formUser">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid UserName.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password must be at least 6 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;

