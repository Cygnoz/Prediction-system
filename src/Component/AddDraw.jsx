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

function AddDraw() {

  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);
  return (
    <div>
       <MDBBtn onClick={toggleOpen} style={{backgroundColor:'rgb(41,40,91)'}} rounded className='my-4 fs-6 me-3'>  
<AddCircleOutlineIcon sx={{ fontSize: 30 }}/> Add Draw</MDBBtn>


      <MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)}>
        <MDBModalDialog centered>
          <MDBModalContent className='shadow'  style={{border:'2px solid rgb(41,40,91)', borderRadius:"15px"}}>
            <MDBModalHeader>
              <MDBModalTitle>Add Draws</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div>
              <p>
              Date :         
              </p>
              <div>
              <input className='w-50' style={{borderRadius:'20px', padding:"0px 10px 0px 10px", backgroundColor:'rgb(215, 215, 215)', color:'rgb(41,40,91)'}}  type="date"  />
            </div>

              </div>
              <div style={{display:'flex' }} className='mt-4 mb-3'>
                <div >
                <p>
              First Draw :         
              </p>
              <div>
              <input className='' placeholder='First Draw' style={{borderRadius:'20px', padding:"0px 10px 0px 10px", backgroundColor:'rgb(215, 215, 215)', color:'rgb(41,40,91)', width:"140px"}}  type="number"  />
               </div>
              </div>

              <div className='ms-3'>
                <p>
                Second Draw :         
              </p>
              <div>
              <input className='' placeholder='Second Draw' style={{borderRadius:'20px', padding:"0px 10px 0px 10px", backgroundColor:'rgb(215, 215, 215)', color:'rgb(41,40,91)', width:"140px"}}  type="number"  />
            </div>
                </div>

                <div className='ms-3'>
                <p>
                Third Draw :         
              </p>
              <div >
              <input className='' placeholder='Third Draw' style={{borderRadius:'20px', padding:"0px 10px 0px 10px", backgroundColor:'rgb(215, 215, 215)', color:'rgb(41,40,91)',width:"140px"}}  type="number"  />
            </div>
                </div>   
              </div>
              
              
             
            
              
             
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn style={{color:'rgb(41,40,91)'}} color='secondary' onClick={toggleOpen}>
                Cancel
              </MDBBtn>
              <MDBBtn  style={{backgroundColor:'rgb(41,40,91)'}}>Save</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


    </div>
  )
}

export default AddDraw