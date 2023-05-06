import { Container, Box, Text, Button, HStack, VStack, Heading, Card, Link } from '@chakra-ui/react';
import React from 'react';

const Search = ({id, trainName, }) => {
  return <Container maxW={'70%'} m={'10px auto'} borderBlock={'ButtonShadow'} shadow={'2xl'} css={{
    boxShadow: "0px 2px 5px#888888"
  }}>
      <Card variant={'outline'} borderWidth={'1px'} shadow={'2xl'} borderRadius="md" overflow="hidden" padding={'20px'} marginTop={'10px'} bgColor={'aliceblue'}>
    <HStack justifyContent={'space-between'}>
        <VStack alignItems={'flex-start'}>
          <Text fontWeight="bold" fontSize="lg">
            12904
            <br/>
            {
                console.log(trainName)
            }
            {trainName}
          </Text>
        </VStack>
            <VStack >
                <HStack>
                <Text>04:00 NZM</Text>
                </HStack>
                <Text>CRC</Text>
            </VStack>
            <VStack >
                <HStack>
            <Text>19h 35m</Text>
                </HStack>
                <Text>CRC</Text>
            </VStack>
            <VStack >
                <HStack>
            <Text>3:35 MMCT</Text>
                </HStack>
                <Text>CRC</Text>
            </VStack>
            
          </HStack>
        <div>Select Class</div>
        <HStack spacing="10" justifyContent={'center'} >
            <Card borderRadius="10px"  bgColor={'white'} w={'50%'} paddingLeft={'20px'} paddingRight={'20px'} >
                <HStack justifyContent={'space-between'} color={'#252994'}>
                <Text size="md" mb="2">
                Sleeper Class
              </Text>
              <Text fontWeight="semibold" mb="2">
                Fare: $100
              </Text>
                </HStack>
                <Text color={'#00D73C'}>
                Available Seats: 30
              </Text>
              <Button m={'0 50px 10px 50px'} padding={'10px'} borderRadius={'10px'} variant={'solid'} bgColor={'#FF6E1D'}>
                Book Ticket
              </Button>
            </Card>
            
            
            
            <Card borderRadius="10px" shadow={'2xl'} bgColor={'white'} w={'50%'} paddingLeft={'20px'} paddingRight={'20px'} >
                <HStack justifyContent={'space-between'} color={'#252994'}>
                <Text  mb="2" fontSize={'2xs'}>AC</Text>
              <Text fontWeight="semibold" mb="2">
                Fare: $50
              </Text>
                </HStack>
              <Text color={'#00D73C'}>
                Available Seats: 30
              </Text>
              <Button m={'0 50px 10px 50px'} padding={'10px'} borderRadius={'10px'} bgColor={'#FF6E1D'}>
                Book Ticket
              </Button>
            </Card>
          </HStack>
        
      </Card>

    
    </Container>
}

export default Search
