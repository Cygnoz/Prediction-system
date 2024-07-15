import React from 'react'
import './Analysis.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
} from 'mdb-react-ui-kit';
import AddDraw from '../Component/AddDraw';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function Analysis() {
  return (
    <div className='Analysis'>
      <div style={{display:'flex', justifyContent:'space-between'}} className=''>
      <h2 className='mt-5 ms-3'>Analysis</h2>
      <AddDraw/>
      </div>

       <div className='d-flex  ms-5'>
        <div> 
          <MDBCard className='ms-3 mt-5 me-5' style={{height:"90px", width:'250px', backgroundColor:"rgb(236, 230, 230)", borderRadius:'20px'}}>
      <MDBCardBody>
        <MDBCardTitle className='text-center mt-2'> <FormatListBulletedIcon sx={{ fontSize: 30 }} className='me-3'/>Result</MDBCardTitle>       
      </MDBCardBody>
    </MDBCard>
    
    </div>
    <div>
      <MDBCard className='mt-5' style={{height:"90px", width:'250px', backgroundColor:"rgb(236, 230, 230)", marginLeft:'80px', borderRadius:'20px'}}>
      <MDBCardBody>
        <MDBCardTitle className='text-center mt-2'> <AccessTimeIcon sx={{ fontSize: 30 }} className='me-3'/>Daily Draw's</MDBCardTitle>       
      </MDBCardBody>
    </MDBCard>
    </div>

    <div>
      <MDBCard className='mt-5' style={{height:"90px", width:'250px', backgroundColor:"rgb(236, 230, 230)",marginLeft:"150px", borderRadius:'20px'}}>
      <MDBCardBody>
        <MDBCardTitle className='text-center mt-2'> <QueryStatsIcon sx={{ fontSize: 30 }} className='me-3'/>Analyser</MDBCardTitle>
       
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>


    {/* table */}
    <div className='mt-5'>
    <h5 className='ms-3 mt-4'>All Draw's</h5>
    </div>
    <div className='' style={{marginTop:'20px', marginLeft:'10%'}}>
    <MDBCard className='text-center' style={{height:"350px", width:'550px', backgroundColor:"white", marginLeft:"200px"}}>
      <MDBCardBody>
        <MDBCardTitle>
              <div>
              <input className='w-50' placeholder='          Select from & to date' type="date" style={{borderRadius:'20px', marginLeft:'-245px', height:'35px', backgroundColor:"rgb(236, 230, 230)", fontSize:'medium'}} />
            </div>
        </MDBCardTitle>
        <table className="draws-table">
          <thead>
            <tr style={{backgroundColor:'rgb(215,215,215)'}}>
              <th>Date</th>
              <th>First Draw</th>
              <th>Second Draw</th>
              <th>Third Draw</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5 Jan 2024</td>
              <td>77</td>
              <td>46</td>
              <td>90</td>
            </tr>
            <tr>
              <td>4 Jan 2024</td>
              <td>35</td>
              <td>67</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>

       
      </MDBCardBody>
    </MDBCard>
    </div>

    <div className='' style={{marginTop:'20px', marginLeft:'10%'}}>
    <MDBCard className='text-center' style={{height:"350px", width:'550px', backgroundColor:"white", marginLeft:"200px"}}>
      <MDBCardBody>
        <MDBCardTitle>
        </MDBCardTitle>
        <table className="draws-table">
          <thead>
            <tr style={{backgroundColor:'rgb(215,215,215)'}}>
              <th>First Draw</th>
              <th>Second Draw</th>
              <th>Third Draw</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>77</td>
              <td>46</td>
              <td>90</td>
            </tr>
            <tr>
              <td>35</td>
              <td>67</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>

       
      </MDBCardBody>
    </MDBCard>
    </div>

    <div className='' style={{marginTop:'20px', marginLeft:'10%'}}>
    <MDBCard className='text-center' style={{height:"350px", width:'550px', backgroundColor:"white", marginLeft:"200px"}}>
      <MDBCardBody>
        <MDBCardTitle>
        </MDBCardTitle>
        <table className="draws-table">
          <thead>
            <tr style={{backgroundColor:'rgb(215,215,215)'}}>
              <th>Draws</th>
              <th>Predicted Result</th>
              <th>Actual Result</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First Draw</td>
              <td>77</td>
              <td>46</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Second Draw</td>
              <td>35</td>
              <td>67</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Third Draw</td>
              <td>35</td>
              <td>67</td>
              <td>12</td>
            </tr>

          </tbody>
        </table>

       
      </MDBCardBody>
    </MDBCard>
    </div>

    </div>
  )
}

export default Analysis



