import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function customerHome() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='src/asset/resturant.jpg/100px180' />
                <Card.Body>
                    <Card.Title>Resturant</Card.Title>
                    <Link to ="/resturants">
                    <Button variant="primary">Go </Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Items</Card.Title>

                    <Button variant="primary">Go </Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Status</Card.Title>

                    <Button variant="primary">Go </Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>order reports</Card.Title>

                    <Button variant="primary">Go </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
