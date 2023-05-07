import { HStack, VStack, Container,Select,Stack,Text,Input, Divider, Button,} from '@chakra-ui/react'
import React from 'react'

const SinglePassenger = () => {
  return (
    <HStack w={['100%','90%']} flexWrap='wrap' justifyContent={['center','space-between']} padding={['10px 0','20px 0']} borderBottom={'2px red'}

        style={{
            borderBottom : "5px black"
        }}
    
    >
            <VStack w={{ base: '100%', md: '25%' }}>
                <div>Name</div>
                <Input type='text' placeholder='Name' padding={'3px'} width={'200px'}/>
            </VStack>
            <VStack >
                <div>Age</div>
                <Input type='text' placeholder='Age' padding={'3px'} width={'200px'}/>
            </VStack>
            <VStack w={{ base: '100%', md: '25%' }}>
                <div>Gender</div>
                <Select placeholder='none'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </Select>
            </VStack>
            <VStack  w={{ base: '100%', md: '25%' }}>
                <div>Birth Preference</div>
                <Select placeholder='none'>
                    <option value="Lower">Lower</option>
                    <option value="Middle">Middle</option>
                    <option value="Upper">Upper</option>
                    <option value="Side Lower">Side Lower</option>
                    <option value="Side Upper">Side Upper</option>
                </Select>
            </VStack>
            <VStack  w={{ base: '100%', md: '25%' }}>
            <div>Nationlaty</div>
                <Select placeholder='none'>
                    <option value="Indian">Indian</option>
                    <option value="other">Other</option>
                </Select>
            </VStack>
            

            
        </HStack>
  )
}

export default SinglePassenger