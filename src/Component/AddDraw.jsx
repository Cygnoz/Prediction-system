import React, { useState } from 'react'

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import {
   // MDBBtn,
  // } from 'mdb-react-ui-kit';
function AddDraw() {

  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);
  return (
    <div>
       <MDBBtn onClick={toggleOpen} style={{backgroundColor:'rgb(41,40,91)'}} rounded className='my-4 fs-6 me-3'>  
<AddCircleOutlineIcon sx={{ fontSize: 30 }}/> Add Draw</MDBBtn>


      <MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Draws</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                <h4>Date</h4>
              <div>
              <input className='w-50' placeholder='          Select from & to date' type="date" style={{borderRadius:'20px',padding:'10px',  backgroundColor:"rgb(236, 230, 230)", fontSize:'medium'}} />
            </div>
              </p>
              <p className='d-flex' style={{}}>
              <p className='ms-3'>First Draw</p>
              <p className='ms-5'>Second Draw</p>
              <p className='ms-5'>Third Draw</p>
              </p>
              
              <div>
                <input className='w-25 ms-2' style={{borderRadius:'10px'}} type="text" placeholder=' First Draw'/>
                <input className='w-25 ms-3'  style={{borderRadius:'10px'}}  type="text" placeholder=' Second Draw'/>
                <input className='w-25 ms-3'  style={{borderRadius:'10px'}}  type="text" placeholder=' Third Draw'/>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Cancel
              </MDBBtn>
              <MDBBtn>Save</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


    </div>
  )
}

export default AddDraw