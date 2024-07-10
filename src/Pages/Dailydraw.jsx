import React from 'react'
import './dailydraw.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Dailydraw() {
  return (
    <div>
        <h2 className='mt-5 ms-3'>Draws</h2>
       <div className='d-flex  ms-5'>
        <div><MDBCard className='m-4' style={{height:"200px", width:'350px', backgroundColor:"rgb(236, 230, 230)"}}>
      <MDBCardBody>
        <MDBCardTitle>First Draw</MDBCardTitle>
       
      </MDBCardBody>
    </MDBCard>
    
    </div>
    <div><MDBCard className='m-4' style={{height:"200px", width:'350px', backgroundColor:"rgb(236, 230, 230)"}}>
      <MDBCardBody>
        <MDBCardTitle>Second Draw</MDBCardTitle>
       
      </MDBCardBody>
    </MDBCard></div>
    <div><MDBCard className='m-4' style={{height:"200px", width:'350px', backgroundColor:"rgb(236, 230, 230)"}}>
      <MDBCardBody>
        <MDBCardTitle style={{ textAlign:'center', justifyContent:'center'}}>Third Draw</MDBCardTitle>
       
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>
    <h5 ms-3>Your Lucky Number's</h5>
        
    </div>
    
  )
}

export default Dailydraw