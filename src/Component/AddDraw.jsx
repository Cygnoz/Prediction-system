import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
    MDBBtn,
  } from 'mdb-react-ui-kit';
function AddDraw() {
  return (
    <div>
       <MDBBtn style={{backgroundColor:'rgb(41,40,91)'}} rounded className='my-4 fs-6 me-3'>  
<AddCircleOutlineIcon sx={{ fontSize: 30 }}/> Add Draw</MDBBtn>
    </div>
  )
}

export default AddDraw