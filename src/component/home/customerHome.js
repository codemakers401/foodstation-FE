import React from 'react'
import { Card, Button ,Row} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Img1 from '../../asset/resturant.jpg'
import Img2 from '../../asset/items.jpg'
import Img3 from '../../asset/report.png'
import Img4 from '../../asset/shop.jpg'
export default function customerHome() {
    return (
        <div style={{marginLeft : '100px'  }}>
                    <Row xs={1} md={3} className="g-4">

            <Card style={{ width: '18rem' , margin:'70px' ,backgroundColor:'orangered' }}>
                <Card.Img variant="top" src={Img4} />
                <Card.Body style={{textAlign :'center'}}>
                    
                    <Link to="/createOrder">
                        <Button variant="primary" >Shop Now</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem'  , margin:'70px',backgroundColor:'orangered' }}>
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
