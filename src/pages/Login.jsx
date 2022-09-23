
import { Button, TextField } from '@mui/material'
import React from 'react'
import { createTheme } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});
const logImg = require('../assets/login.png')

const Login = () => {
  const [nav , setNav] = useState(false)
  return (
    <div className='flex m-auto  justify-center items-center  text-center h-screen'>
    <div className='flex-col m-auto  justify-center items-center  text-center '>
      <div>
        <img src={`${logImg}`} />
      </div>

      <div style={{
        marginTop:"-30px",
        zIndex:10000
      }} className='rounded-xl border-1 m-3 pb-4 w-400  justify-center items-center h-54    '>
       <div className="py-2">
       <TextField className='w-72 ' id="standard-basic" label="Email" variant="standard" />
       </div>
       <div className="py-2 mb-4">
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          className='w-72 '
        />
        </div>
        <Button style={{
          backgroundColor : "#366D8B"
        }} 
        onClick={()=>{setNav("/")}}
        className='w-60 my-4 block mt-6'  variant="contained">Login</Button>
      </div>
      {nav && <Navigate to={nav} replace={true} />}
    </div>
    </div>
  )
}

export default Login
