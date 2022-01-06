import React ,{useState,useEffect}from 'react'
import { Card, Button ,Row} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Img1 from '../../asset/resturant.jpg'
import Img2 from '../../asset/items.jpg'
import Img3 from '../../asset/report.png'
import Img4 from '../../asset/shop.jpg'
import socketIOClient from "socket.io-client";
import cookie from 'react-cookies';
import superagent from 'superagent'
import Gps from '../gps/gps'


export default function CustomerHome() {
    const [response, setResponse] = useState("");
    useEffect(() => {
        async function fetchData() {
            let api = 'http://localhost:3020'
            let cookieData = cookie.load('token')
            let driverOrders = await superagent.get(`${api}/order/${cookieData.id}`).set({ 'Authorization': 'Bearer ' + cookieData.token })
            setmyOOrder(driverOrders.body)
            const socket = socketIOClient(ENDPOINT);
            let x = myOOrder[0]
            socket.emit('createOrder', (response) => {
                setResponse(myOOrder[0]);
                console.log(myOOrder);
            });
            socket.on('updateBill', (x) => {
                // setResponse(myOOrder[0]);
                console.log(x);
            });
        };
        fetchData()
    }, []);
    const ENDPOINT = 'http://localhost:3020';
    const [myOOrder, setmyOOrder] = useState([])
    // const [refresh, setRefresh] = useState(false)
    return (
        <div style={{textAlign:'center' , marginLeft :'350px',marginBottom :'100px' }}>
                    <Row xs={1} md={3} className="g-4">

            <Card style={{ width: '18rem' , margin:'70px' ,backgroundColor:'gray' }}>
                <Card.Img variant="top" src={Img4} />
                <Card.Body style={{textAlign :'center'}}>
                    
                    <Link to="/createOrder">
                        <Button variant="primary" >Shop Now</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem'  , margin:'70px',backgroundColor:'gray' }}>
                <Card.Img variant="top" src={Img3} />
                <Card.Body style={{textAlign :'center'}}>
                    
                    <Link to="/orderReport">
                        <Button variant="primary">My Orders  </Button>
                    </Link>
                </Card.Body>
            </Card>

            

            {/* <Card style={{ width: '18rem'  , margin:'70px'}}>
                <Card.Img variant="top" src={Img3} />
                <Card.Body>
                    <Card.Title>Trace Order</Card.Title>
                    <Link to="/order">
                        <Button variant="primary">Go </Button>
                    </Link>
                </Card.Body>
            </Card> */}
            </Row>
           
        </div>
    )
}
