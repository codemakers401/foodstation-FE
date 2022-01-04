import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header'
import Login from './component/logIn'
import SignUp from './component/signUp'
import { LoginContext } from './component/context/context'
import Resturants from './component/resturants/resturants'
import Items from './component/item/item'
import Hero from './component/hero'
import Status from './component/status/status'
import Order from './component/order/order'
import NewOrder from './component/createNewOrder/createNewOrder'
import ShowItems from './component/showItems/showItems'
import {
  BrowserRouter as Router,

  Route, Routes
} from "react-router-dom";
import Home from './component/home/home'
import About from './component/about/about'
import Footer from './component/footer/footer'

export default function App() {
  const Hoome = useContext(LoginContext)

console.log(Hoome.LoggedIn);
  return (
    <div>
      <Router>


        <Header /><br/><br/><br/>


        <Routes>

        <Route exact path="/" element={
            <>
             <Hero/>
            </>
          }></Route>
          <Route exact path="/signin" element={
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

<Route exact path="/home" element={
            <>
            
              <Home />
            </>
          }></Route>

<Route exact path="/createOrder" element={
            <>
            
              <NewOrder />
            </>
          }></Route>
<Route exact path="/items" element={
            <>
              <Items />
            </>
          }></Route>
<Route exact path="/status" element={
            <>
              <Status />
            </>
          }></Route>

<Route exact path="/order" element={
            <>
              <Order />
            </>
          }></Route>

          
<Route exact path="/showItems" element={
            <>
              <ShowItems />
            </>
          }></Route>

<Route exact path="/signup" element={
            <>
              <SignUp />
            </>
          }></Route>
          <Route exact path ='/about' element={
            <>
            <About/>
            </>
          }></Route>
        </Routes>

        <Footer/>
      </Router>
    </div>
  )
}
