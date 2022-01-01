import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header'
import Login from './component/logIn'
import SignUp from './component/signUp'
import { LoginContext } from './component/context/context'
import Resturants from './component/resturants/resturants'
import {
  BrowserRouter as Router,

  Route, Routes
} from "react-router-dom";
import Home from './component/home/home'

export default function App() {
  const Hoome = useContext(LoginContext)


  return (
    <div>
      <Router>


        <Header />


        <Routes>

          <Route exact path="/" element={
            <>
              {Hoome.LoggedIn &&
                <Home />
              }

              {!Hoome.LoggedIn &&
                <Login />

              }

            </>
          }></Route>

          <Route exact path="/resturants" element={
            <>
              <Resturants />
            </>
          }></Route>

<Route exact path="/signup" element={
            <>
              <SignUp />
            </>
          }></Route>
        </Routes>


      </Router>
    </div>
  )
}
