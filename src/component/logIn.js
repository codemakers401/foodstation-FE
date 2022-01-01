import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { LoginContext } from './context/context'
import { Link } from "react-router-dom";

export default function LogIn() {
    const LogInContext = useContext(LoginContext)
    const [name, setName] = useState({ userName: '' })
    const [password, setPassword] = useState({ password: '' })


    const handleUser = (e) => {
        setName({ userName: e.target.value })
        console.log(';;;;;;;;;;;;;;;;;;');
    }

    
    const handlePassword = (e) => {
        setPassword({ password: e.target.value })
        console.log(';;;;;;;;;;;;;;;;;;');
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();//not to refresh the page
        LogInContext.loginFunction(name.userName, password.password);
    }


    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                        <input placeholder="username" type='text' name='userName' onChange={handleChange} />
                        <input placeholder="password" type='password' name='password' onChange={handleChange} />
                        <button type="submit">login</button>
                    </form> */}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control  type="username" name='userName' onChange={handleUser} placeholder="Enter username" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handlePassword} name='password' placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Sign In
                </Button ><br/>
                <b>You don't have account ? </b>
                <Link to ="/signup">
                <b>SIGN UP</b>
                </Link>

            </Form>
        </div>
    )
}
