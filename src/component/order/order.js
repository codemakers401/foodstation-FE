import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'react-bootstrap'
import superagent from 'superagent'
import cookie from 'react-cookies';

import { Button, Modal, Form } from 'react-bootstrap'


export default function Resturants() {
    const [data, setData] = useState([])
    const [r, setr] = useState(false)


    useEffect(async () => {

        let api = 'http://localhost:3020'
        let cookieData = cookie.load('token')
        let resturantData = await superagent.get(`${api}/allOrders`).set({ 'Authorization': 'Bearer ' + cookieData.token })
        console.log(resturantData);
        setData(resturantData.body)


    }, [r]);

    


    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const [resturantID , setResturantID] = useState()
    const handleClose = () => {setShow1(false) ; setShow2(false)} ;
    const handleShow = (e) =>{
        setResturantID(e.target.id);
        setShow1(true)
    
} 
const handleShowNew =()=>{
    setShow2(true)

}
    const updateResturant =async (e) => {
        e.preventDefault()
                let id = resturantID
                console.log(id);
        let updatedData = {
            statusID :Number( e.target.status.value)
        }
        setShow1(false)

        let cookieData = cookie.load('token')

        let api = 'http://localhost:3020'
        let updateResturant = await superagent.put(`${api}/order/${id}`,updatedData).set({ 'Authorization': 'Bearer ' + cookieData.token })
        console.log(updateResturant);
        setr(!r)
    }

   

      

    return (
        <div style={{margin : '150px'}} >
           <h1 style={{textAlign : 'center',fontSize:'70px' , color:'orangered'}}>ORDERS</h1><br/> 
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>

                        <th>No.</th>
                        <th>Customer Name</th>
                        <th>Total Bill</th>
                        <th>Order Status</th>
                        <th>Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {

                        return (
                            <tr key={index}>

                                <td>{item.id}</td>
                                <td>{item.user.username}</td>
                                <td>{item.totalBill}</td>
                                <td>{item.orderStatus.StatusName}</td>
                                <td> <Button variant="success" id={item.id} onClick={handleShow}>Update</Button>  </td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <Modal show={show1} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Updating Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={updateResturant}>
                        <Form.Label htmlFor="inputPassword5">Order Status </Form.Label>
                        <Form.Control
                            type="number"
                            id="status"
                            aria-describedby="passwordHelpBlock"
                     
                        />
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="onSubmit">
                                Update
                            </Button>
                        </Modal.Footer>
                    </Form>

                </Modal.Body>

            </Modal>

             
            
        </div>
    )
}
