import React from 'react'
import {Form ,Button } from 'react-bootstrap'
import superagent from 'superagent'
// require('dotenv').config();
export default function signUp() {
  const signUp=async(e)=>{
      e.preventDefault();
      
      const data ={
        username:e.target.username.value,
        password:e.target.password.value,
        userAddress:e.target.Address.value,
        userPhone:e.target.Phone.value,
        userEmail:e.target.email.value

      }
      
    let api ='http://localhost:3020'
    let result =await superagent.post(`${api}/signup`,data) 
    console.log(result);
  }
    return (
        <div>
            <Form onSubmit={signUp}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>username</Form.Label>
    <Form.Control name='username' type="text" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>password</Form.Label>
    <Form.Control name='password' type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control name='Address' type="text" placeholder="Address" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control name='Phone' type="number" placeholder="Phone" />
  </Form.Group>


  <Button variant="primary" type="submit">
    Sign Up
  </Button>
</Form>
        </div>
    )
}

