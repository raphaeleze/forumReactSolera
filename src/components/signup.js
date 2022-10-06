import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";


export default function Signup() {
  
  const navigate = useNavigate();

  function navBack() {
    navigate(process.env.PUBLIC_URL + "/")
  }

  function createUser() {
    //process.env.REACT_APP_API_URL
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { padding: "50px 20px", width: 300, margin: "20px auto" },
        }} noValidate autoComplete="off" >

        <div>
          <h4>Registration form</h4>
          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth className='mar-5' />
          <TextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth className='mar-5' />
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth className='mar-5' />
          <TextField id="outlined-basic" label="Confim Password" variant="outlined" fullWidth className='mar-5' />
        </div>
        <div className='frontpageButtons'>
          <Button variant="outlined" onClick={createUser}>Sign up</Button>
          <Button onClick={navBack} className='mar-5'>Go back</Button>
        </div>
      </Box>
    </div>
  );
}
