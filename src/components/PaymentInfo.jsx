import { HStack, VStack, Container,Select,Stack,Text,Input} from '@chakra-ui/react'
import React from 'react'
const PaymentInfo = () => {
  return <Container maxW={'1000%'}  m={['10px auto', '20px auto']}  css={{boxShadow: "0px 0px 5px#888888"}} bgColor={'#F4F3F3'}>
    <HStack w={['100%','90%']} flexWrap='wrap' justifyContent={['center','space-evenly']} padding={['10px 0px','20px opx']}>
        <Text>Ticket Fare: 679</Text>
        <Text>Convenience Fee: 89</Text>
        <Text>Total:780</Text>
    </HStack>
    <Text padding={'0px 0px 10px 30px'} color={'#00D73C'}>Updated Avalability: </Text>
  </Container>
}

export default PaymentInfo
