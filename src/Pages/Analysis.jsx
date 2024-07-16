import React, { useState } from 'react';
import './Analysis.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from 'mdb-react-ui-kit';
import AddDraw from '../Component/AddDraw';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function DrawCard({ index, state, onClick, title, Icon }) {
  const isActive = state === index;
  return (
    <MDBCard
      className={`mt-5 ${isActive ? 'active-draw' : 'draw'}`}
      style={{ height: "90px", width: '300px', marginLeft: index === 1 ? '70px' : '60px', borderRadius: '20px' }}
      onClick={() => onClick(index)}
    >
      <MDBCardBody>
        <MDBCardTitle className='text-center mt-2'>
          <Icon sx={{ fontSize: 30 }} className='me-3' />
          {title}
        </MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  );
}

function Analysis() {
  const [state, setState] = useState(1);

  const action = (index) => {
    console.log(`Changing state to ${index}`);
    setState(index);
  };

  console.log(`Current state: ${state}`);

  return (
    <div className='Analysis'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className='mt-5'>Analysis</h2>
        <AddDraw />
      </div>

      <div className='Draws ms-5'>
        <DrawCard
          index={1}
          state={state}
          onClick={action}
          title="Result"
          Icon={FormatListBulletedIcon}
        />
        <DrawCard
          index={2}
          state={state}
          onClick={action}
          title="Daily Draw's"
          Icon={AccessTimeIcon}
        />
        <DrawCard
          index={3}
          state={state}
          onClick={action}
          title="Analyser"
          Icon={QueryStatsIcon}
        />
      </div>

      <div className='mt-5'>
        <h5 className='ms-3 mt-4'> Draw's</h5>
      </div>

      <div className="tables">
        {state === 1 && (
          <MDBCard className='text-center' style={{ height: "450px", width: '550px', backgroundColor: "white", marginLeft: "200px" }}>
            <MDBCardBody className='table active-table'>
              <MDBCardTitle>
              All Draw
              </MDBCardTitle>
              <div>
                  <input className='w-50' placeholder='Select from & to date' type="date" style={{ borderRadius: '20px', marginLeft: '-245px', padding:'0px 10px 0px 10px ', backgroundColor: "rgb(236, 230, 230)", fontSize: 'medium' }} />
                </div>
              <table className="draws-table">
                <thead>
                  <tr style={{ backgroundColor: 'rgb(215,215,215)' }}>
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
        )}
        {state === 2 && (
          <MDBCard className='text-center' style={{ height: "450px", width: '550px', backgroundColor: "white", marginLeft: "200px" }}>
            <MDBCardBody className='table'>
              <MDBCardTitle>Daily Draw</MDBCardTitle>
              <table className="draws-table">
                <thead>
                  <tr style={{ backgroundColor: 'rgb(215,215,215)' }}>
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
        )}
        {state === 3 && (
          <MDBCard className='text-center' style={{ height: "100%", width: '800px', backgroundColor: "white", marginLeft: "200px" }}>
            <MDBCardBody className='table'>
              <MDBCardTitle>Analysis</MDBCardTitle>
              <table className="draws-table">
                <thead>
                  <tr style={{ backgroundColor: 'rgb(215,215,215)' }}>
                    <th>Date</th>
                    <th>Draws</th>
                    <th>Predicted Result</th>
                    <th>Actual Result</th>
                    <th>Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>04-08-2023</td>
                    <td>First Draw <br />Second Draw <br />Third Draw</td>
                    <td>35,12,12,23, 23,23,23,43,54,65<br />35,12,12,23, 23, 23,23,43,54,65 <br />35,12,12,23, 23,23,23,43,54,65</td>
                    <td>46 <br />56 <br /> 88</td>
                    <td>90</td>
                  </tr>

                  <tr>
                    <td>04-08-2023</td>
                    <td>First Draw <br />Second Draw <br />Third Draw</td>
                    <td>35,12,12,23, 23,23,23,43,54,65<br />35,12,12,23, 23, 23,23,43,54,65 <br />35,12,12,23, 23,23,23,43,54,65</td>
                    <td>46 <br />56 <br /> 88</td>
                    <td>90</td>
                  </tr>

                  <tr>
                    <td>04-08-2023</td>
                    <td>First Draw <br />Second Draw <br />Third Draw</td>
                    <td>35,12,12,23, 23,23,23,43,54,65<br />35,12,12,23, 23, 23,23,43,54,65 <br />35,12,12,23, 23,23,23,43,54,65</td>
                    <td>46 <br />56 <br /> 88</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td>04-08-2023</td>
                    <td>First Draw <br />Second Draw <br />Third Draw</td>
                    <td>35,12,12,23, 23,23,23,43,54,65<br />35,12,12,23, 23, 23,23,43,54,65 <br />35,12,12,23, 23,23,23,43,54,65</td>
                    <td>46 <br />56 <br /> 88</td>
                    <td>90</td>
                  </tr>

                  <tr>
                    <td>04-08-2023</td>
                    <td>First Draw <br />Second Draw <br />Third Draw</td>
                    <td>35,12,12,23, 23,23,23,43,54,65<br />35,12,12,23, 23, 23,23,43,54,65 <br />35,12,12,23, 23,23,23,43,54,65</td>
                    <td>46 <br />56 <br /> 88</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td>04-08-2023</td>
                    <td>First Draw <br />Second Draw <br />Third Draw</td>
                    <td>35,12,12,23, 23,23,23,43,54,65<br />35,12,12,23, 23, 23,23,43,54,65 <br />35,12,12,23, 23,23,23,43,54,65</td>
                    <td>46 <br />56 <br /> 88</td>
                    <td>90</td>
                  </tr>
                  

                  
    
                  
                </tbody>
              </table>
            </MDBCardBody>
          </MDBCard>
        )}
      </div>
    </div>
  );
}

export default Analysis;
