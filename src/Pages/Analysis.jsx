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
import { GetDrawAPI, GetPredictAPI, GetAccuracyAPI ,GetTodayPredictAPI} from '../services/allAPi.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DrawCard({ index, state, onClick, title, Icon }) {
  const isActive = state === index;
  return (
    <MDBCard
      className={`mt-5 ${isActive ? 'active-draw' : 'draw'}`}
      style={{ height: "90px", width: '100%', maxWidth: '300px', margin: '10px', borderRadius: '20px' }}
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
    GetTodayPredictAPI();
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
      const today = new Date();
      today.setDate(today.getDate() - 1); // Get yesterday's date
      const date = today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      const response = await GetTodayPredictAPI(date);
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
    setState(index);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const firstDraw = draws.length > 0 ? draws[draws.length - 1] : null; // Get the latest draw

  return (
    <div className='Analysis'>
      <ToastContainer />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <h2 className='mt-5'>Analysis</h2>
        <AddDraw />
      </div>

      <div className='Draws'>
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

      <div className='tables'>
        {state === 1 && (
          <MDBCard className='text-center' style={{ width: '100%', maxWidth: '550px', margin: '0 auto', backgroundColor: "white" }}>
            <MDBCardBody className='table active-table'>
              <MDBCardTitle>All Draws</MDBCardTitle>
              <div style={{ margin: '10px' }}>
                <input className='w-100' placeholder='Select from & to date' type="date" style={{ borderRadius: '20px', padding: '10px', backgroundColor: "rgb(236, 230, 230)", fontSize: 'medium' }} />
              </div>
              <div className='table-container'>
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
              </div>
            </MDBCardBody>
          </MDBCard>
        )}

        {state === 2 && (
          <MDBCard className='text-center' style={{ width: '100%', maxWidth: '550px', margin: '0 auto', backgroundColor: "white" }}>
            <MDBCardBody className='table'>
              <MDBCardTitle>Daily Draw</MDBCardTitle>
              <div className='table-container'>
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
              </div>
            </MDBCardBody>
          </MDBCard>
        )}

        {state === 3 && firstDraw && (
          <MDBCard className='text-center' style={{ width: '100%', maxWidth: '600px', margin: '0 auto', backgroundColor: "white" }}>
            <MDBCardBody className='table'>
              <MDBCardTitle>Analysis</MDBCardTitle>
              <div className='table-container'>
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
              </div>
            </MDBCardBody>
          </MDBCard>
        )}
      </div>
    </div>
  );
}

export default Analysis;
