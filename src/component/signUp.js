import React, { useState }  from 'react'
import {Form  } from 'react-bootstrap'
import superagent from 'superagent'
//  require('dotenv').config();

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignupCard() {
  const signUp=async(e)=>{
    e.preventDefault();
    
    const data ={
      username:e.target.username.value,
      password:e.target.password.value,
      userAddress:e.target.Address.value,
      userPhone:e.target.Phone.value,
      userEmail:e.target.email.value

    }
    
  let api ='http://localhost:3020'
  let result =await superagent.post(`${api}/signup`,data) 
  console.log(result);
}
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
            <Form onSubmit={signUp}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="username" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              
            </HStack>
            <FormControl  id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl  id="Phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input type="number" />
            </FormControl> <FormControl  id="Address" isRequired>
              <FormLabel>Address</FormLabel>
              <Input type="text" />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} type="onSubmit">
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href="/" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
            
          </Stack>
           </Form>
        </Box>
      </Stack>
     
    </Flex>
  );
}

