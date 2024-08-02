import React, { useState } from 'react';
import './Login.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginAPI } from '../services/allAPi';

function Login() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (!username || !password) {
      toast.error("Enter all fields");
    } else {
      try {
        const result = await loginAPI(formData);
        if (result.status === 200) {
          toast.success("Login successful");
          localStorage.setItem('token', result.data.token);
          setIsAuthenticated(true);
          navigate('/home');
        } else {
          toast.error(result.response.data.error || "Login failed");
        }
      } catch (error) {
        toast.error(error.response?.data?.error || "Login failed");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white text-black my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '600px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                <h2 className="fw-bold mb-2 text-uppercase text-black">Login</h2>
                <p className="text-black-50 mb-5">Please enter your username and password!</p>
                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-black'
                  label='Username'
                  id='formControlLg'
                  type='text'
                  size="lg"
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-black'
                  label='Password'
                  id='formControlLg'
                  type='password'
                  size="lg"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <MDBBtn className='mx-2 px-5' color='success' size='lg' onClick={handleLogin}>
                  Login
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
