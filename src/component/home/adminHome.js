import React from 'react'
import { Card, Button ,Row} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Img1 from '../../asset/resturant.jpg'
import Img2 from '../../asset/items.jpg'
import Img3 from '../../asset/report.png'
import Img4 from '../../asset/status.jpg'

export default function customerHome() {
    return (
        <div style={{marginBottom:'100px' , marginTop:'50px'}}>
                    <Row xs={1} md={4} className="g-4">

            <Card style={{ width: '18rem' , margin:'40px' , backgroundColor :'gray'}}>
                <Card.Img variant="top" src={Img1} />
                <Card.Body style={{textAlign : 'center'}}>
                   
                    <Link to ="/resturants">
                    <Button variant="primary">Resturant List </Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin:'40px' ,backgroundColor :'gray' }}>
                <Card.Img variant="top" src={'https://cdn4.iconfinder.com/data/icons/hotel-and-restaurant-1-8/50/71-512.png'} />
                <Card.Body style={{textAlign : 'center'}}>
                    <Link to ="/items" >
                    <Button variant="primary">Items List </Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' , margin:'40px' ,backgroundColor :'gray'}}>
                <Card.Img variant="top" src={Img4} />
                <Card.Body style={{textAlign : 'center'}}>
                    <Link to ="/status">
                    <Button variant="primary">Status List </Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin:'40px' , backgroundColor :'gray'}}>
                <Card.Img variant="top" src={Img3} />
                <Card.Body style={{textAlign : 'center'}}>
                    <Link to ="/order">
                    <Button variant="primary">order reports </Button>
                    </Link>
                </Card.Body>
            </Card>
            </Row>
        </div>
    )
}
