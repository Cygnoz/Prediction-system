import React from 'react'
import './Analysis.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from 'mdb-react-ui-kit';


function Analysis() {
  return (
    <div className='Analysis'>

      <div className='d-flex'>
      <h2 className='mt-5 ms-3'>Analysis</h2>
<button className='btn btn-rounded text-center my-3' style={{marginLeft:'900px', backgroundColor:'indigo', color:'white'}}>
  <i className='fa-solid fa-circle-plus fs-3 me-2 text-center align-items-center'></i>
Add Draw
</button>
      </div>

       <div className='d-flex  ms-5'>
        <div> <MDBCard className='ms-3 mt-5 me-5' style={{height:"90px", width:'250px', backgroundColor:"rgb(236, 230, 230)", borderRadius:'20px'}}>
      <MDBCardBody>
        <MDBCardTitle className='text-center mb-2'> <i class="fa-solid fa-list me-3 mt-1 fs-3"></i>Result</MDBCardTitle>
       
      </MDBCardBody>
    </MDBCard>
    
    </div>
    <div><MDBCard className='mt-5' style={{height:"90px", width:'250px', backgroundColor:"rgb(236, 230, 230)", marginLeft:'80px', borderRadius:'20px'}}>
      <MDBCardBody>
        <MDBCardTitle className='text-center mb-2'> <i class="fa-regular fa-clock me-3 mt-1 fs-3"></i>Daily Draw's</MDBCardTitle>
       
      </MDBCardBody>
    </MDBCard></div>
    <div><MDBCard className='mt-5' style={{height:"90px", width:'250px', backgroundColor:"rgb(236, 230, 230)",marginLeft:"150px", borderRadius:'20px'}}>
      <MDBCardBody>
        <MDBCardTitle className='text-center mb-2'><i class="fa-regular fa-clock me-3 mt-1 fs-3"></i>Analyser</MDBCardTitle>
       
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>


    {/* table */}
    <div className='' style={{margin:'70px', marginLeft:'120px'}}>
    <MDBCard className='text-center' style={{height:"350px", width:'550px', backgroundColor:"rgb(236, 230, 230)", marginLeft:"200px"}}>
      <MDBCardBody>
        <MDBCardTitle>
              <div>
              <input className='w-50' placeholder='          Select from & to date' type="text" style={{borderRadius:'20px', marginLeft:'-450px', height:'35px', backgroundColor:"rgb(236, 230, 230)", fontSize:'medium'}} />
              <i style={{marginLeft:'-230px'}} class="fa-regular fa-calendar"></i>
            </div>
        </MDBCardTitle>
        <table className="draws-table">
          <thead>
            <tr>
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

    </div>
  )
}

export default Analysis