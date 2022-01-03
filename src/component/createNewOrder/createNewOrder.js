import { Heading, Avatar, Box, Center, Text, Stack, Button, Link, Badge, useColorModeValue, } from '@chakra-ui/react';
import './createNewOrder.css'
import React, { useState, useEffect, useContext } from 'react'
import superagent from 'superagent'
import cookie from 'react-cookies';
import { Modal, Form, Row, Table } from 'react-bootstrap'

export default function CreateNewOrder() {
  const [data, setData] = useState([])
  const [items, setItems] = useState([])
  const [showItemss, setShowItems] = useState(true)
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState([])
  const [id, setID] = useState()

  useEffect(async () => {
    let api = 'http://localhost:3020'
    let cookieData = cookie.load('token')
    let resturantData = await superagent.get(`${api}/restaurant`).set({ 'Authorization': 'Bearer ' + cookieData.token })
    console.log(resturantData.body);
    setData(resturantData.body)

    setOrder(cookie.load('order'));
  }, []);

  console.log(order);
  const showItems = async (e) => {
    console.log(e);
    let id = e
    let api = 'http://localhost:3020'
    let cookieData = cookie.load('token')
    let resturantData = await superagent.get(`${api}/itemByRes/${id}`).set({ 'Authorization': 'Bearer ' + cookieData.token })
    console.log(resturantData.body);
    setItems(resturantData.body)
    setShowItems(false)
  }
  const handleClose = () => { setShow(false) };


  const handleShow = (e) => {
    console.log(e.target.id);
    let idd = e.target.id
    setID(idd)
    setShow(true)
  }
  const getQuantity = (e) => {
    e.preventDefault()
    console.log(e.target.qty.value);
    let quantity = e.target.qty.value
    setOrder([...order, { itemID: id, qty: quantity }])
    cookie.save('order', order)
    setShow(false)
  }

  const deleteItems = (e) => {
    e.preventDefault()
    console.log(e.target.id);
    order.splice(e.target.id, 1)
    console.log(order);
    cookie.save('order', order)
  }

  const confirmOrder =async (e) => {
    e.preventDefault()
    console.log('oooooooooooooooooooooo');
    let confirmedOrder =  order[e.target.id]
let api = 'http://localhost:3020'
let cookieData = cookie.load('token')

let toDataBase = await superagent.post(`${api}/order`,confirmedOrder).set({ 'Authorization': 'Bearer ' + cookieData.token })
console.log(toDataBase);
order.splice(e.target.id, 1)
cookie.save('order', order)


  }
  return (
    <>
      {showItems &&
        <Row xs={1} md={3} className="g-4">
          {data.map((item, index) => {
            return (
              <Center py={6}>
                <Box
                  maxW={'320px'}
                  w={'full'}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  p={6}
                  textAlign={'center'}>
                  <Avatar
                    size={'xl'}
                    src={
                      'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                    }
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                    _after={{
                      content: '""',
                      w: 4,
                      h: 4,
                      bg: 'green.300',
                      border: '2px solid white',
                      rounded: 'full',
                      pos: 'absolute',
                      bottom: 0,
                      right: 3,
                    }}
                  />
                  <Heading fontSize={'2xl'} fontFamily={'body'}>

                  </Heading>

                  <Text
                    textAlign={'center'}
                    px={3}>

                    Resturant Name : {item.restaurantName}
                  </Text>

                  <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>


                  </Stack>

                  <Stack mt={8} direction={'row'} spacing={4}>

                    <Button
                      flex={1}
                      fontSize={'sm'}
                      rounded={'full'}
                      bg={'blue.400'}
                      color={'white'}
                      boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                      }
                      _hover={{
                        bg: 'blue.500',
                      }}
                      _focus={{
                        bg: 'blue.500',
                      }}
                      onClick={() => showItems(item.id)}
                    >
                      Show Items
                    </Button>
                  </Stack>
                </Box>


              </Center>


            )
          })}
        </Row>

      }

      {!showItemss &&
        <Row xs={1} md={6} className="g-4">
          {items.map((item, index) => {
            { console.log(item) }
            return (

              <Center py={6}>


                <Box



                  maxW={'320px'}
                  w={'full'}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  p={6}
                  textAlign={'center'}>
                  <Avatar
                    size={'xl'}
                    src={
item.itemimg                    }
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                    _after={{
                      content: '""',
                      w: 4,
                      h: 4,
                      bg: 'green.300',
                      border: '2px solid white',
                      rounded: 'full',
                      pos: 'absolute',
                      bottom: 0,
                      right: 3,
                    }}
                  />
                  <Heading fontSize={'2xl'} fontFamily={'body'}>

                  </Heading>

                  <Text
                    textAlign={'center'}
                    px={3}>

                    Item Name : {item.itemName}
                  </Text>
                  <Text
                    textAlign={'center'}
                    px={3}>

                    Resturant Name : {item.restaurantName}
                  </Text>
                  <Text
                    textAlign={'center'}
                    px={3}>

                    Price : {item.itemPrice} $
                  </Text>




                  <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>


                  </Stack>

                  <Stack mt={8} direction={'row'} spacing={4}>

                    <Button
                      flex={1}
                      fontSize={'sm'}
                      rounded={'full'}
                      bg={'blue.400'}
                      color={'white'}
                      boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                      }
                      _hover={{
                        bg: 'blue.500',
                      }}
                      _focus={{
                        bg: 'blue.500',
                      }}
                      id={item.itemId}
                      onClick={handleShow}
                    >
                      Click
                    </Button>
                  </Stack>
                </Box>


              </Center>


            )
          })}
        </Row>

      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Updating Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={getQuantity} >
            <Form.Label htmlFor="inputPassword5">Quantity</Form.Label>
            <Form.Control
              type="number"
              id="qty"
              aria-describedby="passwordHelpBlock"
            />


            <Modal.Footer>
              <Button flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }} variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }} variant="primary" type="onSubmit">
                Update
              </Button>
            </Modal.Footer>
          </Form>

        </Modal.Body>

      </Modal>

      <Table striped bordered hover variant="light">
        <thead>
          <tr>

            <th>No.</th>
            <th>Item ID</th>
            <th>Quantity</th>
            <th>Delete</th>
            <th>Confirm</th>


          </tr>
        </thead>
        <tbody>

          {  order.map((item, index) => {

            return (
              <tr key={index}>

                <td>{index + 1}</td>
                <td>{item.itemID}</td>
                <td>{item.qty}</td>
                <td > <Button flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'red.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }} variant="danger" id={index} onClick={deleteItems}>Delete</Button></td>

                <td >
                  <div style={{ textAlign: 'center' }}><Button fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'blue.500',
                    }}
                    _focus={{
                      bg: 'blue.500',
                    }} variant="danger" variant="primary" id={index} onClick={confirmOrder}>Confirm</Button></div>  <br />
                </td>

              </tr>
            )
          })}
        </tbody>
      </Table>


    </>)
}
