import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'react-bootstrap'
import superagent from 'superagent'
import cookie from 'react-cookies';

import { Button, Modal, Form } from 'react-bootstrap'


export default function Resturants() {
    const [data, setData] = useState([])
    const [fresh, setFresh] = useState(false)



    useEffect( () => {
        async function fetchData() {
        let api = 'http://localhost:3020'
        let cookieData = cookie.load('token')
        let resturantData = await superagent.get(`${api}/restaurant`).set({ 'Authorization': 'Bearer ' + cookieData.token })
        console.log(resturantData);
        setData(resturantData.body)
        }
        fetchData()

    }, [fresh]);

    const deleteResturant = async (e) => {
        let cookieData = cookie.load('token')

        console.log(e.target.id);
        let api = 'http://localhost:3020'
        let deleteResturant = await superagent.delete(`${api}/restaurant/${e.target.id}`).set({ 'Authorization': 'Bearer ' + cookieData.token })
        setFresh(!fresh);
    }


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
        let updatedData = {
            restaurantName: e.target.name.value,
            restaurantLocation: e.target.address.value
        }
        setShow1(false)

        let cookieData = cookie.load('token')

        let api = 'http://localhost:3020'
        let updateResturant = await superagent.put(`${api}/restaurant/${id}`,updatedData).set({ 'Authorization': 'Bearer ' + cookieData.token })
        console.log(updateResturant);
        setFresh(!fresh);
    }

    const addResturant = async(e)=>{
        let adddData = {
            restaurantName: e.target.name.value,
            restaurantLocation: e.target.address.value
        }

        setShow2(false)

        let cookieData = cookie.load('token')

        let api = 'http://localhost:3020'
        let addResturant = await superagent.post(`${api}/restaurant`,adddData).set({ 'Authorization': 'Bearer ' + cookieData.token })
        console.log(addResturant);
        setFresh(!fresh);
    }

    return (
        <div >
                <div style={{textAlign:'center'}}><Button variant="primary" onClick={handleShowNew}>ADD NEW RESTURANT</Button></div>  <br/>
            <Table striped bordered hover variant="light" style={{margin:'100px'}}>
                <thead>
                    <tr>

                        <th>No.</th>
                        <th>Resturant Name</th>
                        <th>Resturant Address</th>
                        <th>Delete</th>
                        <th>Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {

                        return (
                            <tr key={index}>

                                <td>{item.id}</td>
                                <td>{item.restaurantName}</td>
                                <td>{item.restaurantLocation}</td>
                                <td > <Button variant="danger" id={item.id} onClick={deleteResturant}>Delete</Button></td>
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
                        <Form.Label htmlFor="inputPassword5">Resturant Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputPassword5">Resturant Address</Form.Label>
                        <Form.Control
                            type="text"
                            id="address"
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

             
            <Modal show={show2} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adding Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addResturant}>
                        <Form.Label htmlFor="inputPassword5">Resturant Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputPassword5">Resturant Address</Form.Label>
                        <Form.Control
                            type="text"
                            id="address"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="onSubmit">
                                ADD
                            </Button>
                        </Modal.Footer>
                    </Form>

                </Modal.Body>

            </Modal>
        </div>
    )
}
