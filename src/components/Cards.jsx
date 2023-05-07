import { Container, Box, Text, Button, HStack, VStack, Heading, Card, Link } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';

const Search = ({ id, _id, trainName, arrivalSrc, arrivalDest, acCoaches, sleeperCoaches, departureSrc, trainNumber}) => {
    console.log(_id);
    const navigate = useNavigate();

    const trainObj = {
        id : _id ,
        trainName : trainName,
        arrivalSrc : arrivalSrc,
        arrivalDest : arrivalDest,
        acCoaches : acCoaches, 
        sleeperCoaches : sleeperCoaches,
        departureSrc:departureSrc,
        trainNumber :trainNumber
    }



    const clickHandler = (e) => {
        console.log(trainObj)
        
        navigate('/passenger', { state: trainObj })
    }

    return <Container maxW={'70%'} m={'10px auto'} borderBlock={'ButtonShadow'} shadow={'2xl'} css={{
        boxShadow: "0px 2px 5px#888888"
    }}>
        <Card variant={'outline'} borderWidth={'1px'} shadow={'2xl'} borderRadius="md" overflow="hidden" padding={'20px'} marginTop={'10px'} bgColor={'aliceblue'}>
            <HStack justifyContent={'space-between'}>
                <VStack alignItems={'flex-start'}>
                    <Text fontWeight="bold" fontSize="lg">
                        {trainNumber}
                        <br />
                        {
                            console.log(trainName)
                        }
                        {trainName}
                    </Text>
                </VStack>
                <VStack >
                    <HStack>
                        <Text>{arrivalSrc}</Text>
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
                        <Text>{arrivalDest}</Text>
                    </HStack>
                    <Text>CRC</Text>
                </VStack>

            </HStack>
            <div>Select Class</div>
            <HStack spacing="10" justifyContent={'center'} >
                <Card borderRadius="10px" bgColor={'white'} w={'50%'} paddingLeft={'20px'} paddingRight={'20px'} >
                    <HStack justifyContent={'space-between'} color={'#252994'}>
                        <Text size="md" mb="2">
                            Sleeper Class
                        </Text>
                        <Text fontWeight="semibold" mb="2">
                            Fare: $100
                        </Text>
                    </HStack>
                    <Text color={'#00D73C'}>
                
                        Available Seats: {sleeperCoaches}
                    </Text>
                    <Button m={'0 50px 10px 50px'} onClick={clickHandler} padding={'10px'} borderRadius={'10px'} variant={'solid'} bgColor={'#FF6E1D'}>
                        Book Ticket
                    </Button>
                </Card>



                <Card borderRadius="10px" shadow={'2xl'} bgColor={'white'} w={'50%'} paddingLeft={'20px'} paddingRight={'20px'} >
                    <HStack justifyContent={'space-between'} color={'#252994'}>
                        <Text mb="2" fontSize={'2xs'}>AC</Text>
                        <Text fontWeight="semibold" mb="2">
                            Fare: $50
                        </Text>
                    </HStack>
                    <Text color={'#00D73C'}>
                        Available Seats: {acCoaches}
                    </Text>
                    <Button m={'0 50px 10px 50px'} onClick={clickHandler} padding={'10px'} borderRadius={'10px'} bgColor={'#FF6E1D'}>
                        Book Ticket
                    </Button>
                </Card>
            </HStack>

        </Card>


    </Container>
}

export default Search
