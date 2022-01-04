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
    Container,
    useColorModeValue,
  } from '@chakra-ui/react';
  import './about.scss'
  import nedal from '../../profile/nedal.jpg'
  import amr from '../../profile/amr.jpg'
  import munes from '../../profile/munes.jpg'
  import ehab from '../../profile/ehab.jpg'
  import white from '../../logo/white.jpg'
  import linkedin from '../../logo/linkedin.png'
  import github from '../../logo/github.png'
  import Carousel from 'react-bootstrap/Carousel'
  
  export default function SocialProfileWithImage() {
    return (
        <div>
        {/* <h1 className='about'>About us</h1>
        <img src={white} className='white'/> */}


        <Carousel className='carousel'>
  <Carousel.Item>
      <h1 className='who'>Who we are</h1>
  <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          marginRight={'20px'}>
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
              src={
                nedal
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Nedal
              </Heading>
              <Text color={'gray.500'}>Full Stack Software Developer</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
              <a href='https://www.linkedin.com/in/nedal-al-saleh-4b0a271bb/'>
                    <img src={linkedin}/>
                </a>
              </Stack>
              <Stack spacing={0} align={'center'}>

              <a href='https://github.com/Nedal1994'>
                    <img src={github}/>
                </a>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
          </Box>
        </Box>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          marginRight={'20px'}>
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
              src={
                amr
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Amr
              </Heading>
              <Text color={'gray.500'}>Full Stack Software Developer</Text>
            </Stack>
  
            
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
              <a href='https://www.linkedin.com/in/amr-nzzal/'>
                    <img src={linkedin}/>
                </a>
              </Stack>
              <Stack spacing={0} align={'center'}>

              <a href='https://github.com/amr88nzzal'>
                    <img src={github}/>
                </a>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
          </Box>
        </Box>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          marginRight={'20px'}>
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
              src={
                munes
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Mu'nes
              </Heading>
              <Text color={'gray.500'}>Full Stack Software Developer</Text>
            </Stack>
  
       
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
              <a href='https://www.linkedin.com/in/engmunesyasin/'>
                    <img src={linkedin}/>
                </a>
              </Stack>
              <Stack spacing={0} align={'center'}>

              <a href='https://github.com/MunesYasin'>
                    <img src={github}/>
                </a>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
          </Box>
        </Box>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
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
              src={
                ehab
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Ehab
              </Heading>
              <Text color={'gray.500'}>Full Stack Software Developer</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <a href='https://www.linkedin.com/in/ehabalshrida/'>
                    <img src={linkedin}/>
                </a>
                
              </Stack>
              <Stack spacing={0} align={'center'}>
              <a href='https://github.com/Ehabalshrida'>
                    <img src={github}/>
                </a>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
          </Box>
        </Box>
      </Center>
  </Carousel.Item>




  <Carousel.Item>
  <h1 className='who'>Our vision</h1>
  <Center py={6} className='head'>
       
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} >
              Through a shared commitment to excellence, we are dedicated to the uncompromising quality of our food, service, people and profit, while taking exceptional care of our guests and staff. We will continuously strive to surpass our own accomplishments and be recognized as a leader in our industry.
              </Heading>
        
   </Center>

  <h1 className='who'>Our mission</h1>
  <Center py={6} className='head'>
  <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} >
              To create an environment where absolute guest satisfaction is our highest priority.
              </Heading>
      </Center>
  </Carousel.Item>
</Carousel>
            </div> 
    );
  }