import React, { useContext, useState } from 'react'
import { LoginContext } from './context/context'
import {Form} from 'react-bootstrap'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SimpleCard() {
    const LogInContext = useContext(LoginContext)
    const [name, setName] = useState({ userName: '' })
    const [password, setPassword] = useState({ password: '' })


    const handleUser = (e) => {
        setName({ userName: e.target.value })
        console.log(';;;;;;;;;;;;;;;;;;');
    }

    
    const handlePassword = (e) => {
        setPassword({ password: e.target.value })
        console.log(';;;;;;;;;;;;;;;;;;');
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();//not to refresh the page
        console.log('ok');
        LogInContext.loginFunction(name.userName, password.password);
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8} >
                <Form onSubmit={handleSubmit}>
            <Stack spacing={4}  >
              <FormControl id="email" onChange={handleUser}>
                <FormLabel >User Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password" onChange={handlePassword} >
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} type='onSubmit'>
                  Sign in
                </Button  >
               
                <Text align={'center'}>
                Already a user? <Link href="/signup" color={'blue.400'}>Sign Up</Link>
              </Text>
              </Stack>
              
            </Stack>
            </Form>
          </Box>
        </Stack>
      </Flex>
    );
  }