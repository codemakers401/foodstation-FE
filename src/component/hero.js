import {
    Stack,
    Flex,
    Button,
    Text,
    Link,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://media.istockphoto.com/photos/blackboard-with-chalk-border-picture-id1132606352?k=20&m=1132606352&s=612x612&w=0&h=fCDUEg5MqYO8b9vAyPpThOREc9U7N1X2CsRLkTBHRO0=)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={'row'}>
             <Link href="/signin" color={'blue.400'}> 
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>Get Started
               
              </Button >
              </Link>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }