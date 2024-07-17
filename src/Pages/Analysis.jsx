import React, { useEffect, useState } from 'react';
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
import { GetDrawAPI, GetPredictAPI, GetAccuracyAPI } from '../services/allAPi.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [draws, setDraws] = useState([]);
  const [todayDraw, setTodayDraw] = useState(null);
  const [accuracyData, setAccuracyData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDraws();
    fetchTodayPrediction();
    fetchAccuracyData();
  }, [state]);

  const fetchDraws = async () => {
    try {
      const response = await GetDrawAPI();
      if (response instanceof Error) {
        throw new Error('Failed to fetch draws data');
      }
      const data = response.data;
      const allDraws = data.flatMap(item => item.draws);
      setDraws(allDraws);
    } catch (error) {
      console.error('Error fetching draws data:', error);
      toast.error('Error fetching draws data');
    }
  };

  const fetchTodayPrediction = async () => {
    try {
      const date = new Date().toISOString().split('T')[0];
      const response = await GetPredictAPI(`?date=${date}&n_predictions=10`);
      if (response instanceof Error) {
        throw new Error('Failed to fetch today\'s prediction data');
      }
      setTodayDraw(response.data);
    } catch (error) {
      console.error('Error fetching today\'s prediction:', error);
      toast.error('Error fetching today\'s prediction');
    }
  };

  const fetchAccuracyData = async () => {
    try {
      const response = await GetAccuracyAPI();
      setAccuracyData(response.data);
    } catch (error) {
      console.error('Error fetching accuracy data:', error);
      setError(error.message);
    }
  };

  const action = (index) => {
    console.log(`Changing state to ${index}`);
    setState(index);
  };

  console.log(`Current state: ${state}`);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const firstDraw = draws.length > 0 ? draws[draws.length - 1] : null; // Get the latest draw

  return (
    <div className='Analysis'>
      <ToastContainer />
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
        <h5 className='ms-3 mt-4'>Draws</h5>
      </div>

      <div className="tables" style={{ overflowY: 'auto', maxHeight: '500px' }}>
        {state === 1 && (
          <MDBCard className='text-center' style={{ height: "450px", width: '550px', backgroundColor: "white", marginLeft: "200px" }}>
            <MDBCardBody className='table active-table' style={{ overflowY: 'auto' }}>
              <MDBCardTitle>All Draws</MDBCardTitle>
              <div>
                <input className='w-50' placeholder='Select from & to date' type="date" style={{ borderRadius: '20px', marginLeft: '-245px', padding: '0px 10px 0px 10px', backgroundColor: "rgb(236, 230, 230)", fontSize: 'medium' }} />
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
                  {draws.slice().reverse().map((draw, index) => (
                    <tr key={index}>
                      <td>{draw.date}</td>
                      <td>{draw.morning !== null ? draw.morning : 'N/A'}</td>
                      <td>{draw.afternoon !== null ? draw.afternoon : 'N/A'}</td>
                      <td>{draw.evening !== null ? draw.evening : 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </MDBCardBody>
          </MDBCard>
        )}

        {state === 2 && (
          <MDBCard className='text-center' style={{ height: "450px", width: '550px', backgroundColor: "white", marginLeft: "200px" }}>
            <MDBCardBody className='table' style={{ overflowY: 'auto' }}>
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
                    <td>{todayDraw.Morning_Predictions ? todayDraw.Morning_Predictions.join(', ') : 'N/A'}</td>
                    <td>{todayDraw.Afternoon_Predictions ? todayDraw.Afternoon_Predictions.join(', ') : 'N/A'}</td>
                    <td>{todayDraw.Evening_Predictions ? todayDraw.Evening_Predictions.join(', ') : 'N/A'}</td>
                  </tr>
                </tbody>
              </table>
            </MDBCardBody>
          </MDBCard>
        )}

        {state === 3 && firstDraw && (
          <MDBCard className='text-center' style={{ height: "100%", width: '600px', backgroundColor: "white", marginLeft: "200px" }}>
            <MDBCardBody className='table'>
              <MDBCardTitle>Analysis</MDBCardTitle>
              <table className="draws-table">
                <thead>
                  <tr style={{ backgroundColor: 'rgb(215,215,215)' }}>
                    <th>Date</th>
                    <th>Draws</th>
                    <th>Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{firstDraw.date}</td>
                    <td>{`${firstDraw.morning}, ${firstDraw.afternoon}, ${firstDraw.evening}`}</td>
                    <td>{accuracyData}</td> {/* Assuming accuracyData has a property 'accuracy' */}
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
