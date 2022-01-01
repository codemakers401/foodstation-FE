import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function customerHome() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='src/asset/resturant.jpg/100px180' />
                <Card.Body>
                    <Card.Title>Resturant</Card.Title>

                    <Button variant="primary">Go </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
