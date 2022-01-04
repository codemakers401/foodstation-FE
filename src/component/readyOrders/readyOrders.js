import React, { useState, useEffect, useContext } from 'react'
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
import {Row} from 'react-bootstrap'
import superagent from 'superagent'
import cookie from 'react-cookies';
export default function ReadyOrders() {
const [data,setData] = useState([])
const [refresh , setRefresh] = useState(false)
console.log(data);

    useEffect(async () => {
        let api = 'http://localhost:3020'
        let cookieData = cookie.load('token')
        
        let toDataBase = await superagent.get(`${api}/allOrders`).set({ 'Authorization': 'Bearer ' + cookieData.token })
        console.log(toDataBase.body);
        let filterdArray = toDataBase.body.filter(item=>item.orderStatus.StatusName === 'accepted')
        console.log(filterdArray);

        setData(filterdArray)
    }, [refresh]);

 const addToMyCar=async(e,index)=>{


    
console.log(e.id);
let api = 'http://localhost:3020'
let cookieData = cookie.load('token')
let newData = {statusID :data[index].statusID+1 , driverid :cookieData.id }
let updateStatus = await  superagent.put(`${api}/order/${e.id}`,newData).set({ 'Authorization': 'Bearer ' + cookieData.token })

setRefresh(!refresh)


 }




    return (
        <div>
                            <Row xs={1} md={6} className="g-4">
                  {(!data  || !data.length ) && 
                   <div>No Order Now</div>
                  }
            {data.map((item,index)=>{
                console.log(item);
                return(

            
            <Center py={6}>
                <Box
                    maxW={'320px'}
                    w={'full'}
                    bg={'orangered'}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uEM-z4p9RJ64hourfB4jqBUI0O-iJQdLjbKTcPV3HIKFIXaIF3d2Tv-8OYBUj-XPEH0&usqp=CAU'
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
                        ID : {item.id}
                    </Heading>
                    <Text fontWeight={600} color={'black.500'} mb={4}>
                        STATUS : {item.orderStatus.StatusName}
                    </Text>
                    <Text fontWeight={600} color={'black.500'} mb={4}>
                        TOTAL : {item.totalBill} $
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
                            }} onClick={()=>addToMyCar(item,index)}>
                            PICK UP
                        </Button>
                    </Stack>
                </Box>
            </Center> 
               )
            })}
            </Row>

        </div>
    )
}
