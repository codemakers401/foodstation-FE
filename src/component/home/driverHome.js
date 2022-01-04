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

            <Card style={{ width: '18rem' , margin:'50px', backgroundColor :'orangered' }} >
                <Card.Img variant="top" src={"https://cdn2.iconfinder.com/data/icons/logistic-and-shipping-industry-for-export-and-impo/297/logistic-7-512.png"} />
                <Card.Body  style={{textAlign :'center'}}>
               
                    <Link href="/readyOrders" > 
                    <Button variant="primary">Pickup Order</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' , margin:'50px' , backgroundColor :'orangered' }}>
                <Card.Img variant="top" src={'https://www.kindpng.com/picc/m/22-222195_pick-up-store-icon-hd-png-download.png'} />
                <Card.Body style={{textAlign :'center'}}>
                    <Link href="/deleveryOrders" > 
                    <Button variant="primary">My Orders </Button>
                    </Link>
                </Card.Body>
            </Card>
            </Row>
        </div>
    )
}
