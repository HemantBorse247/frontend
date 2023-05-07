import { Container, HStack, VStack,Text } from "@chakra-ui/react"
import { Stack } from "@mui/material"
import React from 'react'

const Review = ({arrivalSrc, departureSrc, trainName, trainNumber}) => {
  return (
    <>
    <Container maxW={'70%'}   m={'20px auto'} css={{boxShadow: "0px 2px 5px#888888"}}>
    <Stack>
    <Container maxW={'100%'} bgColor={'#717070'}>
        <div style={{color:'white' ,fontSize:'20px', padding:'10px 30px' }}>Review</div>
    </Container>
    <Container maxW={'100%'}  >
        <HStack w={'100%'} justifyContent={'space-between'} bgColor={'#F4F3F3'}>
            
            <VStack paddingLeft={'30px'}>
            <Text fontWeight="bold" fontSize="lg">
                 {trainNumber}
                <br/>
                {trainName}
            </Text>
            </VStack>
            <VStack>
                <Text>Arrival</Text>
                <Text>{arrivalSrc}</Text>
            </VStack>
            <VStack>
                <Text>Departure</Text>
                <Text>{departureSrc}</Text>
            </VStack>
            <VStack paddingRight={'30px'}>
                <Text>Fare</Text>
                <Text>50</Text>
            </VStack>
        
        </HStack>
    </Container>
    </Stack>
    
    </Container>
    </>
        
        
  )
}

export default Review
