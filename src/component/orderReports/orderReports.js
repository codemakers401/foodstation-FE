import {
    Heading,    Avatar,    Box,    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  import superagent from 'superagent'
import cookie from 'react-cookies';
 import React ,{useState,useEffect} from 'react'
import {Modal,Row} from 'react-bootstrap'
  export default function SocialProfileSimple() {
  const [allOrder , setAllOrder] = useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true); getDetails()}

  useEffect(async () => {
    let api = 'http://localhost:3020'
    let cookieData = cookie.load('token')
    
    let toDataBase = await superagent.get(`${api}/order`).set({ 'Authorization': 'Bearer ' + cookieData.token })
    console.log(toDataBase);
    setAllOrder(toDataBase.body)
}, []);

const getDetails=()=>{

}
     


    return (
        <>
                <Row xs={1} md={3} className="g-4">

        {allOrder && allOrder.map((item,index)=>{
              
       return (
           <>
         
      <Center py={6}>
        <Box
        bg={'orange.200'}
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
              Order ID : {item.id}
          </Heading>
          
          <Text fontWeight={600} color={'gray.500'} mb={4}>
          Item Name : {item.orders[0].item.itemName}
        </Text>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          Price : {item.orders[0].item.itemPrice} $ 
        </Text>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          Quantity : {item.orders[0].qty}
        </Text>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          Total Bill : {item.orders[0].totalItem}
        </Text>
        
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          Order Status : {item.orderStatus.StatusName}
        </Text>
  
          <Stack mt={8} direction={'row'} spacing={4}>
            
         
          </Stack>
        </Box>
      </Center>


</>
)
 })}
 </Row>
</>
    );
  }