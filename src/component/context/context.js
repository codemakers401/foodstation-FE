
import React, { useEffect, useState } from "react";
import superagent from 'superagent';
import base64 from 'base-64';
import jwt from 'jsrsasign';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();



export default function LoginProvider(props) {

    const API = 'http://localhost:3020';

    const [LoggedIn, setLoggedIn] = useState(false);

    
    const [user, setUser] = useState({ username: "" });
    const [capabilities , setCapabilities] = useState([])
    const [token,setToken]=useState()
    // // user.capabilities = ['read', 'create', 'update', 'delete'];
    // user.capabilities = ['read', 'create'];

    const loginFunction = async (username, password) => {
        // it will update the LoggedIn flag into true
        console.log('------------------------',username,password);
        try {
            const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
            console.log(response.body)
              console.log(response.body.user.actions)
               setCapabilities(response.body.user.actions)


            validateMyToken(response.body.user );
        } catch (err) { }

    }
    const logoutFunction = () => {
            console.log(';;;;;;;;;;;;');
        // it will update the LoggedIn flag into false
        setLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }

    const validateMyToken =async (data) => {
        if (data) {

              const username = data.username
            console.log(data.token,'kkkkkkkkkkkkk');
            setToken(data.token)
            setLoggedIn(true);
            setUser(username);
            cookie.save('token', data);
            console.log(data.token);
        } else {
            setLoggedIn(false);
            setUser({});
        }

    }



    useEffect(() => {
        // check the token

        const myTokenCookie = cookie.load('token');
        validateMyToken(myTokenCookie);
    }, []);



    const can = (capability) => {
        // chaining
        //optional chaining
        return capabilities?.includes(capability);
    }

    const state = {
        LoggedIn: LoggedIn,
        loginFunction: loginFunction,
        logoutFunction: logoutFunction,
        user: user,
        can: can,
        token : token
    }
    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}





  
