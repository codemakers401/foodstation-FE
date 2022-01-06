import React, { useState, useEffect, useContext } from 'react'
import {Row} from 'react-bootstrap'
import superagent from 'superagent'
import cookie from 'react-cookies';
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
import swal from 'sweetalert'

export default function DeleveryOrders() {

const [myOOrder,setmyOOrder] = useState([])
const [refresh , setRefresh] = useState(false)



    useEffect(async () => {
        try{
        let api = 'http://localhost:3020'
        let cookieData = cookie.load('token')
        console.log(cookieData.id);
        let driverOrders = await superagent.get(`${api}/allDriverOrders/${cookieData.id}`).set({ 'Authorization': 'Bearer ' + cookieData.token })
       console.log(driverOrders.body);
       setmyOOrder(driverOrders.body)}catch(error){
           console.log(error);
       }
    }, [refresh]);




  const onTheWayStatus=async(e,index)=>{
    if(myOOrder[index].statusID<4){

    let api = 'http://localhost:3020'
    let cookieData = cookie.load('token')
    let newData = {statusID :myOOrder[index].statusID+1 , driverid :cookieData.id }
    let updateStatus = await  superagent.put(`${api}/order/${e.id}`,newData).set({ 'Authorization': 'Bearer ' + cookieData.token })
    }
    setRefresh(!refresh)
    swal("Good job!", "You changed status!", "success");

}




    return (
        <div style={{marginBottom:'70px'}}>
                  <Row xs={1} md={4} className="g-4">

{myOOrder.map((item,index)=>{
    console.log(item);
    return(
    <>
    {item.statusID === 2 && 
<div>
<Center py={6}>
    <Box
    bg='gray.300'
        maxW={'320px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
            size={'xl'}
            src={
item.orderStatus.statusimg           }
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
           Bill No. : {item.id}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
            STATUS : {item.orderStatus.StatusName}
        </Text>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
            TOTAL : {item.totalBill} $
        </Text>
        <Text
            textAlign={'center'}
            color={'gray.500'}
            px={3}>
            ADDRESS : {item.user.userAddress}

        </Text>
        <Text
            textAlign={'center'}
            color={'gray.500'}
            px={3}>
            Customer Name : {item.user.username}

        </Text> <Text
            textAlign={'center'}
            color={'gray.500'}
            px={3}>
            Phone : {item.user.userPhone}

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
                }} onClick={()=>onTheWayStatus(item,index)}>
                Next Status
            </Button>
           
        </Stack>
    </Box>
</Center> 
</div>}
</>
   )
})}

{myOOrder.map((item,index)=>{
    console.log(item);
    return(
    <>
    {item.statusID === 3 && 
<div>
<Center py={6}>
    <Box
    bg='yellow.200'
        maxW={'320px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
            size={'xl'}
            src={
                item.orderStatus.statusimg           }
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
           Bill No. : {item.id}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
            STATUS : {item.orderStatus.StatusName}
        </Text>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
            TOTAL : {item.totalBill} $
        </Text>
        <Text
            textAlign={'center'}
            color={'gray.500'}
            px={3}>
            ADDRESS : {item.user.userAddress}

        </Text>
        <Text
            textAlign={'center'}
            color={'gray.500'}
            px={3}>
            Customer Name : {item.user.username}

        </Text> <Text
            textAlign={'center'}
            color={'gray.500'}
            px={3}>
            Phone : {item.user.userPhone}

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
                }} onClick={()=>onTheWayStatus(item,index)}>
                Next Status
            </Button>
           
        </Stack>
    </Box>
</Center> 
</div>}
</>
   )
})}

{myOOrder.map((item,index)=>{
    console.log(item);
    return(
    <>
    {item.statusID === 4 && 
<div>
<Center py={6}>
    <Box
    bg='green.300'
        maxW={'320px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
            size={'xl'}
            src={
                item.orderStatus.statusimg           }
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
           Bill No. : {item.id}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
            STATUS : {item.orderStatus.StatusName}
        </Text>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
            TOTAL : {item.totalBill} $
        </Text>
        <Text
            textAlign={'center'}
            color={'gray.500'}
            px={3}>
            ADDRESS : {item.user.userAddress}

        </Text>
        <Text
            textAlign={'center'}
            color={'gray.500'}
            px={3}>
            Customer Name : {item.user.username}

        </Text> <Text
            textAlign={'center'}
            color={'gray.500'}
            px={3}>
            Phone : {item.user.userPhone}

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
                }} onClick={()=>onTheWayStatus(item,index)}>
                Next Status
            </Button>
           
        </Stack>
    </Box>
</Center> 
</div>}
</>
   )
})}
</Row>

        </div>
    )
}
