import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";
import cookie from 'react-cookies';
import superagent from 'superagent'
import { AspectRatio } from '@chakra-ui/react'
export default function CustomerHome() {
  const [response, setResponse] = useState("");
  const [xx, setXx] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let api = 'http://localhost:3020'
      let cookieData = cookie.load('token')
      let driverOrders = await superagent.get(`${api}/order/${cookieData.id}`).set({ 'Authorization': 'Bearer ' + cookieData.token })
      setmyOOrder(driverOrders.body)
      const socket = socketIOClient(ENDPOINT);
      socket.emit('createOrder', (response) => {
        setResponse(myOOrder[0]);
        console.log(myOOrder);});
      socket.on('updateBill', (x) => {
        setXx([x]);
        console.log(x);
      });
    };
    fetchData()
  }, []);
  const updatx =(x)=>{ setXx([x])  }
  const ENDPOINT = 'http://localhost:3020';
  const [myOOrder, setmyOOrder] = useState([])
  const [refresh, setRefresh] = useState(false)
  return (
    <>
     <AspectRatio ratio={10 / 9}>
  <iframe title="123"
    src={`https://maps.google.com/maps?q=${xx[0]}&hl=es&z=14&amp;output=embed`}
    target="_parent"
    alt='demo'
  />
</AspectRatio>
    </>
  )
};