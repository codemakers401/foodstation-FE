import React,{useState,useEffect} from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import Img1 from '../../asset/items.jpg'
import { Link, } from '@chakra-ui/react';
import socketIOClient from "socket.io-client";
import cookie from 'react-cookies';
import superagent from 'superagent'

export default function CustomerHome() {
const ENDPOINT = 'http://localhost:3020';
const [myOOrder, setmyOOrder] = useState([])
const [refresh, setRefresh] = useState(false)

  useEffect( () => {
    async function fetchData() { try {
      let api = 'http://localhost:3020'
      let cookieData = cookie.load('token')
      console.log(cookieData.id);
      let driverOrders = await superagent.get(`${api}/allDriverOrders/${cookieData.id}`).set({ 'Authorization': 'Bearer ' + cookieData.token })
      console.log(driverOrders.body);
      setmyOOrder(driverOrders.body)
    } catch (error) {
      console.log(error);
    }}
    fetchData() 
  }, [refresh]);

  
    const [response, setResponse] = useState("");
  
    useEffect(() => {
      const socket = socketIOClient(ENDPOINT);
      setResponse(myOOrder[0]);
      socket.emit('billUpdate', myOOrder=>{
        setInterval(() =>setResponse(myOOrder[0]), 1000);
        ;
      });
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
      } else {
        console.log("Not Available");
      }
    
    }, []);
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                <Card style={{ width: '18rem', margin: '50px', backgroundColor: 'orangered' }} >
                    <Card.Img variant="top" src={"https://cdn2.iconfinder.com/data/icons/logistic-and-shipping-industry-for-export-and-impo/297/logistic-7-512.png"} />
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Link href="/readyOrders" >
                            <Button variant="primary">Pickup Order</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '50px', backgroundColor: 'orangered' }}>
                    <Card.Img variant="top" src={'https://www.kindpng.com/picc/m/22-222195_pick-up-store-icon-hd-png-download.png'} />
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Link href="/deleveryOrders" >
                            <Button variant="primary">My Orders </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Row>
            <p>
        It's <time dateTime={response}>{response}</time>
      </p>
        </div>
    )
}
