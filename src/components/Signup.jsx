import React from 'react'
import { Grid, Paper, TextField,Button,Typography, Link} from "@mui/material"
import { HStack } from '@chakra-ui/react'
const Signup = () => {
    const paperStyle={
        padding:20,
        height:'80vh',
        width:400,
        margin:'20px auto'

    }
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <h2>Sign Up</h2>
            </Grid>
            <HStack>
            <TextField label="First name" placeholder='Enter your First Name' fullWidth required style={{marginTop:12}}/>
                <TextField label="Last name" placeholder='Enter your Last Name' fullWidth required style={{marginTop:12}}/>
            </HStack>
            <TextField label="Email Address" placeholder='Enter your Email ID'  type='email'  fullWidth required style={{marginTop:12}}/>
            <TextField label="Phone Number" placeholder='Enter your Phone Number' type='mobilenumber' fullWidth required style={{marginTop:12}}/>
            <TextField label="Username" placeholder='Enter your Username' fullWidth required style={{marginTop:12}}/>
            <HStack>
            <TextField label="Password" placeholder='Enter your Password' type='password' fullWidth required style={{marginTop:12}}/>
            <TextField label="Confirm Password" placeholder='Confirm your password'  type='password' fullWidth required style={{marginTop:12}}/>
            </HStack>


                <Button style={{backgroundColor:"#252994", color:'white',marginTop:12}} fullWidth  >Sign Up</Button>

                <Typography style={{marginTop:10}}>
                    <p style={{color:"#FF6E1D"}}>Already Signup?</p>
                </Typography>

                <Typography> Do you have an account?
                <Link href='#' style={{color:"#252994"}}>Login</Link>
            </Typography>
        </Paper>

    </Grid>
  )
}

export default Signup
