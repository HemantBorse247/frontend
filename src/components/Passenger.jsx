import { HStack, VStack, Button, Container, Select, Stack, Text, Input, Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PaymentInfo from './PaymentInfo';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import trainDataServices from '../services/trainServices';
import Review from './Review';
// import SinglePassenger from './SinglePassenger';
const Passenger = () => {

    const location = useLocation();
    const trainObj = location.state
    console.log(trainObj);
    
    const [passengerObj, setPassengerObj] = useState([
        {}
    ]);
    const handler = (index, value) => {
        const fArray = passengerObj;
        fArray[index] = value;
        setPassengerObj(fArray)
        console.log(passengerObj)
    }

    const navigate = useNavigate();


    // const [passengerList, setPassengerList] = useState([1])

    const submitHandlerAgain = (e) => {
        console.log(passengerObj);
        if (passengerObj.length == 1 && (passengerObj[0].name == undefined || passengerObj[0].age == undefined || passengerObj[0].gender == undefined || passengerObj[0]).birthpref == undefined ) {
            console.log('undefined values');

        }
        else {
            trainDataServices.postTrains('/api/postPassDetails', { passengerObj, trainObj })
                .then(res => {
                    console.log(res)
                    navigate('/confirmation')
                })
                .catch(err => console.log(err))
        }

    }

    const submitHandler = (e) => {

        setPassengerObj([...passengerObj, {}]);
        //* post request


    }

    const deleteTask = () => {
        console.log()


        const filterArray = passengerObj.filter((val, i) => {
            return i !== (passengerObj.length - 1);

        })
        setPassengerObj(filterArray)
    }
    useEffect(() => {

    }, [passengerObj])

    return (
        <>
        <Review arrivalSrc = {trainObj.arrivalSrc} departureSrc = {trainObj.departureSrc} trainName = {trainObj.trainName} trainNumber = {trainObj.trainNumber}/>
            <Container maxW={'70%'} m={['10px auto', '20px auto']} css={{ boxShadow: "0px 2px 5px#888888" }}>
                <Container maxW={'100%'} bgColor={'#FF6E1D'}>
                    <div style={{ color: 'white', fontSize: '20px', padding: '10px 30px' }}>Passenger Details</div>
                </Container>
                <Container maxW={'100%'} bgColor={'#F4F3F3'} pb={'15px'}>
                    <VStack>
                        {
                            passengerObj.map((item, index) => (
                                <SinglePassenger handler={handler} index={index} />
                            ))
                        }



                        {/* <VStack w={'100%'} h={'100%'} alignItems={'flex-start'} >
            <div style={{paddingLeft:'30px' , fontWeight:"bold"}}>Contact Information</div>
            <HStack w={['100%','90%']} flexWrap='wrap' justifyContent={['center','flex-start']} padding={['10px 0','20px 0']}>
            <VStack paddingLeft={'30px'}>
                <div>Email</div>
                <Input type='email' placeholder='Enter your email' padding={'3px'} width={'200px'}/>
            </VStack>
            <VStack paddingLeft={'30px'}>
                <div>Mobile No</div>
                <Input type='phone number' placeholder='Enter your Mobile Number' padding={'3px'} width={'200px'}/>
            </VStack>
            <VStack paddingLeft={'30px'} justifyContent={'center'} alignItems={'center'}>
            <Button  width={'7rem'} onClick={submitHandler} >Add passenger
            </Button>
            </VStack>
            <VStack  w={{ base: '100%', md: '25%' }}>
            <Button h={'100%'}  onClick={()=>{deleteTask()}} >
                Reduce Passenger
            </Button>
            </VStack>
            
        </HStack>
        </VStack> */}
                    </VStack>
                    <HStack w={['100%', '90%']} flexWrap='wrap' justifyContent={'space-evenly'} alignItems={'center'} pt={'10px'}>
                        <Button w={'200px'} padding={'12px'} borderRadius={'10px'} color={'white'} type='submit' onClick={submitHandler} variant={'solid'} bgColor={'#252994'} ><div style={{ fontSize: '17px' }}>Add passenger</div></Button>
                        <Button w={'200px'} padding={'12px'} borderRadius={'10px'} color={'white'} type='submit' onClick={() => { deleteTask() }} variant={'solid'} bgColor={'#252994'} ><div style={{ fontSize: '17px' }}>Remove Passenger</div></Button>
                        <Button w={'200px'} padding={'12px'} borderRadius={'10px'} color={'white'} type='submit' onClick={submitHandlerAgain} variant={'solid'} bgColor={'#252994'} ><div style={{ fontSize: '17px' }}>Book Ticket</div></Button>
                    </HStack>

                </Container>

                <PaymentInfo />

            </Container>
        </>


    )
}
const SinglePassenger = ({ handler, index }) => {

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [birthpref, setBirthpref] = useState();
    const [nationality, setNationality] = useState();

    const obj = {
        name: name,
        age: age,
        gender: gender,
        birthpref: birthpref,
        // nationality: nationality
    }

    useEffect(() => {

        handler(index, obj);
        console.log(obj);

    }, [name, age, gender, birthpref])

    console.log(obj)
    return (
        <HStack w={['100%', '90%']} flexWrap='wrap' justifyContent={['center', 'space-between']} padding={['10px 0', '20px 0']} borderBottom={'2px red'}

            style={{
                borderBottom: "5px black"
            }}

        >
            <VStack w={{ base: '100%', md: '25%' }}>
                <div>Name</div>
                <Input type='text'

                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}

                    placeholder='Name' padding={'3px'} width={'200px'} />
            </VStack>
            <VStack >
                <div>Age</div>
                <Input type='text'
                    value={age} onChange={(e) => {
                        setAge(e.target.value)
                    }} placeholder='Age' padding={'3px'} width={'200px'} />
            </VStack>
            <VStack w={{ base: '100%', md: '25%' }}>
                <div>Gender</div>
                <Select placeholder='none' value={gender} onChange={(e) => {
                    setGender(e.target.value)
                }}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </Select>
            </VStack>
            <VStack w={{ base: '100%', md: '25%' }}>
                <div>Birth Preference</div>
                <Select placeholder='none' value={birthpref} onChange={(e) => {
                    setBirthpref(e.target.value)
                }} >
                    <option value="Lower">Lower</option>
                    <option value="Middle">Middle</option>
                    <option value="Upper">Upper</option>
                    <option value="Side Lower">Side Lower</option>
                    <option value="Side Upper">Side Upper</option>
                </Select>
            </VStack>
            <VStack w={{ base: '100%', md: '25%' }}>
                <div>Nationlaty</div>
                <Select placeholder='none' value={nationality} onChange={(e) => {
                    setNationality(e.target.value);
                }} >
                    <option value="Indian">Indian</option>
                    <option value="other">Other</option>
                </Select>
            </VStack>



        </HStack>
    )
}

export default Passenger
