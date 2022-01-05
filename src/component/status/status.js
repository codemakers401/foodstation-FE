import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react'
import superagent from 'superagent'
import cookie from 'react-cookies';
import { Modal, Form, Row } from 'react-bootstrap'


export default function SocialProfileSimple() {

    const [data, setData] = useState([])
    const [fresh, setFresh] = useState(false)


    useEffect(() => {
        async function fetchData() {
        let api = 'http://localhost:3020'
        let cookieData = cookie.load('token')
        let resturantData = await superagent.get(`${api}/status`).set({ 'Authorization': 'Bearer ' + cookieData.token })
        console.log(resturantData.body);
        setData(resturantData.body)
        }
        fetchData()
    }, [fresh]);

    const deleteResturant = async (e) => {
        let cookieData = cookie.load('token')

        console.log(';;;;', e.target.id);
        let api = 'http://localhost:3020'
        let deleteResturant = await superagent.delete(`${api}/status/${e.target.id}`).set({ 'Authorization': 'Bearer ' + cookieData.token })
        setFresh(!fresh);
    }


    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [resturantID, setResturantID] = useState()
    const handleClose = () => { setShow1(false); setShow2(false) };
    const handleShow = (e) => {
        setResturantID(e.target.id);
        setShow1(true)

    }
    const handleShowNew = () => {
        setShow2(true)

    }
    const updateResturant = async (e) => {
        e.preventDefault()
        let id = resturantID
        let updatedData = {
            StatusName: e.target.name.value


        }
        setShow1(false)

        let cookieData = cookie.load('token')

        let api = 'http://localhost:3020'
        let updateResturant = await superagent.put(`${api}/status/${id}`, updatedData).set({ 'Authorization': 'Bearer ' + cookieData.token })
        console.log(updateResturant);
        setFresh(!fresh);
    }


    const addResturant = async (e) => {
        e.preventDefault()

        let adddData = {

            StatusName: e.target.name.value
        }

        setShow2(false)

        let cookieData = cookie.load('token')

        let api = 'http://localhost:3020'
        let addResturant = await superagent.post(`${api}/status`, adddData).set({ 'Authorization': 'Bearer ' + cookieData.token })
        console.log(addResturant.body);
        setFresh(!fresh);
    }


    return (
        <>
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
                }} onClick={handleShowNew}>ADD NEW STATUS</Button>

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
                                <Text fontWeight={600} color={'gray.500'} mb={4}>
                                    Status Name : {item.StatusName}
                                </Text>


                                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>


                                </Stack>

                                <Stack mt={8} direction={'row'} spacing={4}>
                                    <Button
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        _hover={{
                                            bg: 'red.500',
                                        }}
                                        _focus={{
                                            bg: 'gray.200',
                                        }}
                                        id={item.id} onClick={deleteResturant}>
                                        Delete
                                    </Button >
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
                                        id={item.id} onClick={handleShow}
                                    >
                                        Update
                                    </Button>
                                </Stack>
                            </Box>

                            <Modal show={show1} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Updating Form</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={updateResturant}>
                                        <Form.Label htmlFor="inputPassword5">Item Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="name"
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
                            <Modal show={show2} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Adding Form</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={addResturant}>
                                        <Form.Label htmlFor="inputPassword5">Status Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="name"
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
                                                }} variant="secondary" variant="secondary" onClick={handleClose}>
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
                                                }} variant="primary" variant="primary" type="onSubmit">
                                                ADD
                                            </Button>
                                        </Modal.Footer>
                                    </Form>

                                </Modal.Body>

                            </Modal>
                        </Center>


                    )
                })}
            </Row>


        </>);
}




