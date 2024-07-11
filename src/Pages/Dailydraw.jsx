import React from 'react'
import './dailydraw.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBContainer, MDBRow, MDBCol
  } from 'mdb-react-ui-kit';
function Dailydraw() {
  return (
    <div>
        <h2 className='mt-5 ms-4'>Draws</h2>
       <div  className='draws'>
        <div>
          <MDBCard  style={{borderRadius:'20px'}} className=' ms-5 '>
      <MDBCardBody   className='drawcard active'>
        <MDBCardTitle className='text-center mt-5'>First Draw</MDBCardTitle>
       
      </MDBCardBody>
    </MDBCard>
    
    </div>
    <div>
      <MDBCard style={{borderRadius:'20px'}}  className='ms-5' >
      <MDBCardBody className='drawcard'>
        <MDBCardTitle className='text-center mt-5'>Second Draw</MDBCardTitle>
       
      </MDBCardBody>
    </MDBCard></div>
    <div><MDBCard style={{borderRadius:'20px'}}  className='ms-5'>
      <MDBCardBody className='drawcard'>
        <MDBCardTitle className='text-center m-5'>Third Draw</MDBCardTitle>
       
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>
    <div>
      <h5 className='ms-4 mt-4'>Your Lucky Number's</h5>
      
      <div className='numbermain shadow'>
      <MDBContainer >
      <MDBRow style={{marginLeft:'20px'}} >
        <MDBCol  md='1'  className='number m-5 rounded-5'>
           <p>18</p>
        </MDBCol>
        <MDBCol md='1'  className='number rounded-5 m-5'>
           <p>18</p>
        </MDBCol>
        <MDBCol md='1'  className='number rounded-5 m-5'>
           <p>19</p>     
         </MDBCol>
        <MDBCol md='1'  className='number rounded-5 m-5'>
           <p>18</p>       
        </MDBCol>
        <MDBCol md='1'  className='number rounded-5 m-5'>
           <p>28</p>       
        </MDBCol>
      </MDBRow>
      <MDBRow style={{marginLeft:'20px'}}>
        <MDBCol  md='1'  className='number rounded-5 m-5'>
           <p>18</p>        
        </MDBCol>
        <MDBCol md='1'  className='number rounded-5 m-5'>
           <p>18</p>       
        </MDBCol>
        <MDBCol md='1'  className='number rounded-5 m-5'>
         <p>18</p>        
        </MDBCol>
        <MDBCol md='1'  className='number rounded-5 m-5'>
         <p>18</p>        
        </MDBCol>
        <MDBCol md='1'  className='number rounded-5 m-5'>
         <p>18</p>        
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </div>

    </div>        
    </div>
    
  )
}

export default Dailydraw