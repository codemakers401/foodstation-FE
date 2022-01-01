import React from 'react'
import Auth from '../context/auth'
import Admin from './adminHome'
import Driver from './driverHome'
import Customer from './customerHome'


export default function home(props) {
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
                
            </Auth>
        </div>
    )
}
