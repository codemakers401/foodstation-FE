import React from 'react'
import { Card, Button ,Row} from 'react-bootstrap'
import Img1 from '../../asset/items.jpg'
import {
    Stack,
    Flex,
    
    Text,
    Link,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
export default function CustomerHome() {
    return (
        <div>
                                <Row xs={1} md={3} className="g-4">

            <Card style={{ width: '18rem' , margin:'50px' }} >
                <Card.Img variant="top" src={Img1} />
                <Card.Body>
                    <Card.Title>Ready Orders</Card.Title>
                    <Link href="/readyOrders" > 
                    <Button variant="primary">Go </Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' , margin:'50px'}}>
                <Card.Img variant="top" src={Img1} />
                <Card.Body>
                    <Card.Title>My  Delivary Cart</Card.Title>
                    <Link href="/deleveryOrders" > 
                    <Button variant="primary">Go </Button>
                    </Link>
                </Card.Body>
            </Card>
            </Row>
        </div>
    )
}
