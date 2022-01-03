import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Img1 from '../../asset/resturant.jpg'
import Img2 from '../../asset/items.jpg'
import Img3 from '../../asset/report.png'
import Img4 from '../../asset/status.jpg'
export default function customerHome() {
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Img1} />
                <Card.Body>
                    <Card.Title>Create New Order</Card.Title>
                    <Link to="/createOrder">
                        <Button variant="primary">Go </Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Img2} />
                <Card.Body>
                    <Card.Title>Orders Reports</Card.Title>
                    <Link to="/orderReport">
                        <Button variant="primary">Go </Button>
                    </Link>
                </Card.Body>
            </Card>

            

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Img3} />
                <Card.Body>
                    <Card.Title>Trace Order</Card.Title>
                    <Link to="/order">
                        <Button variant="primary">Go </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
