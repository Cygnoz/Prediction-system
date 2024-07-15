import React, { useState } from 'react'
import './Login.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const [email,setEmail]=useState()
  const [password,setPassword]=useState()


 

  const handleLogin = ()=>{
    if(!email || !password){
      toast.error("enter all fields")
     
    
    }else{
     
      console.log(email);
      console.log(password);
    }
   

  }
  return (
    <div>
       <ToastContainer />
       <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white text-black my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '600px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase text-black">Login</h2>
        <p className="text-black-50 mb-5">Please enter your email and password!</p>

        <MDBInput
         wrapperClass='mb-4 mx-5 w-100' 
         labelClass='text-black'
         label='Email address' 
          id='formControlLg' 
          type='email' 
          size="lg"
          onChange={(e)=>setEmail(e.target.value)}/>
        <MDBInput 
        wrapperClass='mb-4 mx-5 w-100' 
        labelClass='text-black' 
        label='Password' 
        id='formControlLg'
         type='password'
          color='white' 
          size="lg"
          onChange={(e)=>setPassword(e.target.value)}/>

        <MDBBtn  className='mx-2 px-5' color='success' size='lg'
        onClick={handleLogin}
        >
          Login
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
    </div>
  )
}

export default Login