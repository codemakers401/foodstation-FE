import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import React,{useContext , useEffect , useState} from 'react'
  import {LoginContext} from './context/context'
  import LoggedIN from './logIn'
  import superagent from 'superagent'
  import cookie from 'react-cookies';
  import { Modal, Form, Row, Table } from 'react-bootstrap'


  export default function SocialProfileWithImage() {
    const authContext = useContext(LoginContext)
    const [profileData , setProfileData] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false) };
    const handleShow = (e) => {
       
        setShow(true)
      }
    useEffect(async () => {
        let api = 'http://localhost:3020'
        let cookieData = cookie.load('token')
        
        let getProfile = await superagent.get(`${api}/profile`).set({ 'Authorization': 'Bearer ' + cookieData.token })
        console.log(getProfile.body);
        setProfileData(getProfile.body)
    }, []);

     const updateProfile=async(e)=>{
       let updatedData = {
        userEmail:e.target.name.value,
        userAddress:e.target.address.value,
        userPhone:e.target.phone.value,
        userimg : e.target.img.value
       }
       let api = 'http://localhost:3020'
       let cookieData = cookie.load('token')
       
       let getProfile = await superagent.put(`${api}/profile`,updatedData).set({ 'Authorization': 'Bearer ' + cookieData.token })
      console.log(getProfile);
       setProfileData(getProfile.body)
     }


    return (
        <>
        {!authContext.LoggedIn &&
             <LoggedIN/>
        }

        {profileData.map((item,index)=>{

        return(<>
      <Center py={6}>
        <Box
          maxW={'700px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          height={'500px'}
          >
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={item.userimg }
                      
        
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Name : {item.username}
              </Heading>
              <Text color={'gray.500'}>Email : {item.userEmail}</Text>
              <Text color={'gray.500'}>Address : {item.userAddress}</Text>
              <Text color={'gray.500'}>Phone : {item.userPhone}</Text>

            </Stack>
  
            
  
            <Button
              w={'full'}
              bg={'blue.400'}
              mt={8}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }} onClick={handleShow}>
              Update
            </Button>

          </Box>
        </Box>
      </Center>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Updating Form</Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form onSubmit={updateProfile} >
    <Form.Label htmlFor="inputPassword5">Email  </Form.Label>
    <Form.Control
      type="text"
      id="name"
      aria-describedby="passwordHelpBlock"
    />
<Form.Label htmlFor="inputPassword5">Address</Form.Label>
    <Form.Control
      type="text"
      id="address"
      aria-describedby="passwordHelpBlock"
    /><Form.Label htmlFor="inputPassword5">Phone</Form.Label>
    <Form.Control
      type="number"
      id="phone"
      aria-describedby="passwordHelpBlock"
    /><Form.Label htmlFor="inputPassword5">IMG URL</Form.Label>
    <Form.Control
      type="text"
      id="img"
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
     </> )
    })}
      </>
    );
  }