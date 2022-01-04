import React ,{useEffect,Component }from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import './gps.css'
import MAP from './newComponent'
export default function Gps() {

useEffect(() => {
   if ("geolocation" in navigator) {
          console.log("Available");
        } else {
          console.log("Not Available");
        }
       

}, [])
useEffect(() => {
  
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position)
      });
 
 }, [])

 useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log(position);
        },
        function(error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
 }, [])
    

    return (
        <div id="map">
       <MAP/>    
        </div>
    )

    }


// AIzaSyBF5UK5yCXthu2fAkGajC5rxS9DRZVu2i0