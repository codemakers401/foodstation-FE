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
        <div style={{marginBottom :'40px'}}>
        {(!allOrder ||allOrder.length === 0) && 
 <div>NO ORDER AVILABLE</div>}
                <Row xs={1} md={4} className="g-4">
{console.log(allOrder)}
        {allOrder && allOrder.map((item,index)=>{
              console.log(item);
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
            src={item.orders[0].item.itemimg
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
            <Link href='/gps'>
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
                            }} >
               Trace Order
             </Button></Link>

          <Stack mt={8} direction={'row'} spacing={4}>
            
         
          </Stack>

        </Box>
      </Center>


</>
)
 })}
 </Row>

 
</div>
    );
  }