import React,{useContext} from 'react'
import { LoginContext } from './context';
import { When } from 'react-if';

export default function Auth(props) {
  console.log('///////////////',props);
const auth = useContext(LoginContext)
console.log(auth.LoggedIn);
  const isLoggedIn = auth.LoggedIn;
  console.log('++++++++++++++',auth.can(props.capability));
  const doHaveCapabilities = auth.can(props.capability);


    return (
        <When condition={isLoggedIn && doHaveCapabilities}>
        {props.children}
        </When>
    )
}
