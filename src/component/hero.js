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
        'url(https://www.themeatman.co.uk/pub/media/catalog/product/s/h/shutterstock_1023416758.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
        
          <Stack direction={'row'}>
            <div style={{textAlign :'left'}}>
          <Link href="/signin" color={'blue.400'} > 
            <Button
            margin={'-650px'}
              bg={'gray.500'}
              w={'300px'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'orange.100' }}>
              Get Start
            </Button>
          </Link>
          </div>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}