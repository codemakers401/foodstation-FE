import {
  Stack,
  Flex,
  Button,
  Text,
  Link,
  VStack,
  useBreakpointValue,
  Img,
} from '@chakra-ui/react';
import { Card ,Row} from 'react-bootstrap'
import './hero.css'

export default function WithBackgroundImage() {
  return (
    <>
    <img src='https://www.talabat.com/images/Talabat/marshmallow-banner-img-1.png' style={{width : '25%',height :'300px' , position : 'absolute'}}></img>
       <img src='https://www.talabat.com/images/Talabat/marshamallow-banner-img-2.png' style={{width : '40%',height :'300px' , position : 'absolute' , marginLeft:'911px'}}></img>

   
   <Flex
      w={'full'}
      h={'300px'}
      backgroundColor={'FFEDED'}
      backgroundSize={''}
      backgroundPosition={'center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6} >
          <Text style={{marginLeft:'-170px' , fontSize:'30px'}}>Order food online</Text>
          <Stack direction={'row'}>
            <div style={{textAlign :'left'}}>
          <Link href="/signin" id='start' > 
            <Button
            margin={'-200px'}
              bg={'rgb(255, 72, 0)'}
              w={'300px'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'orange.400' }}>
              Get Start
            </Button>
          </Link>
          </div>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    
    
    <div style={{marginTop:'50px',marginLeft:'540px' , fontSize:'30px'}}>Your everyday, right away</div>
    <br/><div style={{marginLeft:'470px' , fontSize:'20px'}}>Order food and grocery delivery online from hundreds of</div>
    <div style={{ marginBottom:'10px',marginLeft:'550px' , fontSize:'20px'}}>restaurants and shops nearby.</div>
    <br/> <br/> <br/></>
  );
}

// style="background: url("https://images.deliveryhero.io/image/talabat/homeBanners/New_foodback_jo_636364940091661090.jpg") center top no-repeat rgb(0, 0, 0); height: 400px; min-height: 0px;"