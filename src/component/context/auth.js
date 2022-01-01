import React,{useContext} from 'react'
import { LoginContext } from './context';
import { When } from 'react-if';

export default function Auth(props) {
const auth = useContext(LoginContext)
  const isLoggedIn = auth.LoggedIn;
  const doHaveCapabilities = auth.can(props.capability);


    return (
        <When condition={isLoggedIn && doHaveCapabilities}>
        {props.children}
        </When>
    )
}
