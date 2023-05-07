import { Avatar, Button, Grid ,Link,Paper, TextField, Typography} from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Login1 = () => {
    const paperStyle={
        padding:20,
        height:'70vh',
        width:300,
        margin:'20px auto'

    }
    const avtarStyle={
        backgroundColor:"#FF6E1D"
    }
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avtarStyle}><LockOutlinedIcon /></Avatar>
                <h2>Login</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter Username' fullWidth required/>
            <TextField label='password' placeholder='Enter password' type='password' fullWidth required style={{marginTop:12}}/>
            <FormControlLabel
                label="Remember Me"
                control={
                 <Checkbox
                    name="checkbox"
                    color='primary'
                />
             }
            />
            <Button style={{backgroundColor:"#252994", color:'white'}} fullWidth>Login</Button>
            <Typography style={{marginTop:10}}>
                <Link href='#' style={{color:"#FF6E1D"}}>Forgot Password?</Link>
            </Typography>
            <Typography> Do you have an account?
                <Link href='#' style={{color:"#252994"}}>Sign Up</Link>
            </Typography>
        </Paper>
    </Grid>
  )
}

export default Login1
