import React,{useContext} from 'react'
import Auth from '../context/auth'
import Admin from './adminHome'
import Driver from './driverHome'
import Customer from './customerHome'
import {LoginContext} from '../context/context'
import LoggedIN from '../logIn'
export default function Home(props) {
    const authContext = useContext(LoginContext)
    return (
        <div>
            <Auth capability='admin'>
                <Admin />
            </Auth>

            <Auth capability='customer'>
                <Customer />
                
            </Auth>
            <Auth capability='driver'>
                <Driver />
                
            </Auth >

            {!authContext.LoggedIn &&
             <LoggedIN />
            }


        </div>
    )
}
