import React, { useState } from 'react';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddDrawAPI } from '../services/allAPi';
import './AddDraw.css';
 
function AddDraw() {
  const [centredModal, setCentredModal] = useState(false);
  const [date, setDate] = useState('');
  const [morning, setMorning] = useState('');
  const [afternoon, setAfternoon] = useState('');
  const [evening, setEvening] = useState('');
 
  const toggleOpen = () => setCentredModal(!centredModal);
 
  const handleSave = async () => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.toLocaleString('default', { month: 'long' });
 
    // Format date to MM/DD/YYYY
    const formattedDate = `${('0' + (dateObj.getMonth() + 1)).slice(-2)}/${('0' + dateObj.getDate()).slice(-2)}/${year}`;
 
    // Parse inputs to float or null
    const parsedMorning = morning ? parseFloat(morning) : null;
    const parsedAfternoon = afternoon ? parseFloat(afternoon) : null;
    const parsedEvening = evening ? parseFloat(evening) : null;
 
    // Format data according to schema
    const newDraw = {
      month,
      year,
      draws: [{
        date: formattedDate,
        morning: parsedMorning,
        afternoon: parsedAfternoon,
        evening: parsedEvening
      }]
    };
 
    // Log the data being sent
    console.log("Data being sent:", newDraw);
 
    // Send data to the backend
    try {
      const response = await AddDrawAPI(newDraw);
      if (response.status === 201) {
        console.log('Draw added successfully');
        toast.success("Draw added successfully");
        toggleOpen();
      } else {
        console.error('Error adding draw:', response.data.error || 'Unexpected error');
        toast.error(response.data.error || 'Unexpected error');
      }
    } catch (error) {
      console.error('Error adding draw:', error.response?.data?.error || 'Unexpected error');
      toast.error(error.response?.data?.error || 'Unexpected error');
    }
  };
 
  return (
    <div>
      <ToastContainer/>
      <MDBBtn onClick={toggleOpen} style={{ backgroundColor: 'rgb(41,40,91)' }} rounded className='my-4 fs-6 me-3'>
        <AddCircleOutlineIcon sx={{ fontSize: 30 }} /> Add Draw
      </MDBBtn>
 
      <MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)}>
        <MDBModalDialog centered>
          <MDBModalContent className='shadow' style={{ border: '2px solid rgb(41,40,91)', borderRadius: "15px" }}>
            <MDBModalHeader>
              <MDBModalTitle>Add Draws</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div>
                <p>Date :</p>
                <div>
                  <input
                    className='w-100 w-sm-50'
                    style={{ borderRadius: '20px', padding: "0px 10px 0px 10px", backgroundColor: 'rgb(215, 215, 215)', color: 'rgb(41,40,91)' }}
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }} className='mt-4 mb-3'>
                <div className='w-100 w-sm-50 mb-3'>
                  <p>First Draw :</p>
                  <div>
                    <input
                      className=''
                      placeholder='First Draw'
                      style={{ borderRadius: '20px', padding: "0px 10px 0px 10px", backgroundColor: 'rgb(215, 215, 215)', color: 'rgb(41,40,91)', width: "100%" }}
                      type="number"
                      min={0}
                      value={morning}
                      max={99}
                      onChange={(e) => setMorning(e.target.value)}
                    />
                  </div>
                </div>
 
                <div className='w-100 w-sm-50 mb-3'>
                  <p>Second Draw :</p>
                  <div>
                    <input
                      className=''
                      placeholder='Second Draw'
                      style={{ borderRadius: '20px', padding: "0px 10px 0px 10px", backgroundColor: 'rgb(215, 215, 215)', color: 'rgb(41,40,91)', width: "100%" }}
                      type="number"
                      value={afternoon}
                      min={0}
                      max={99}
                      onChange={(e) => setAfternoon(e.target.value)}
                    />
                  </div>
                </div>
 
                <div className='w-100 w-sm-50 mb-3'>
                  <p>Third Draw :</p>
                  <div>
                    <input
                      className=''
                      placeholder='Third Draw'
                      style={{ borderRadius: '20px', padding: "0px 10px 0px 10px", backgroundColor: 'rgb(215, 215, 215)', color: 'rgb(41,40,91)', width: "100%" }}
                      type="number"
                      value={evening}
                      min={0}
                      max={99}
                      onChange={(e) => setEvening(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn style={{ backgroundColor: 'rgb(41,40,91)' }} onClick={handleSave}>Save</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
 
export default AddDraw;