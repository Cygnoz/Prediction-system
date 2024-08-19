import React, { useState, useEffect } from 'react';
import './dailydraw.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBSpinner
} from 'mdb-react-ui-kit';
import { GetPredictAPI } from '../services/allAPi';

function Dailydraw() {
  const [state, setState] = useState(1);
  const [predictions, setPredictions] = useState({
    1: [],
    2: [],
    3: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todayStr, setTodayStr] = useState('');
  const [noPrediction, setNoPrediction] = useState(false);

  useEffect(() => {
    fetchPredictions();
  }, []);

  const fetchPredictions = async () => {
    setLoading(true);
    setError(null);
    setNoPrediction(false);
    try {
      const today = new Date();
      
      // Format date as DD-MM-YY
      const year = today.getFullYear().toString().slice(-2);
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      const todayStrFormatted = `${day}-${month}-${year}`;
      setTodayStr(todayStrFormatted);

      // Check if today is one of the special dates
      if ((day === '15' && month === '08') || (day === '02' && month === '10') || (day === '26' && month === '01')) {
        setNoPrediction(true);
        setLoading(false);
        return;
      }
  
      const response = await GetPredictAPI(todayStrFormatted);
      console.log('API Response:', response);
      const { Morning_Predictions, Afternoon_Predictions, Evening_Predictions } = response.data;
      console.log('Predictions:', response.data);
      setPredictions({
        1: Morning_Predictions,
        2: Afternoon_Predictions,
        3: Evening_Predictions
      });
    } catch (err) {
      console.error('API Fetch Error:', err);
      setError('Failed to fetch predictions. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const action = (index) => {
    setState(index);
  }

  const renderNumbers = (drawIndex) => {
    if (noPrediction) {
      return (
        <MDBCol xs='12' className='no-prediction-message'>
          <p>No prediction today</p>
        </MDBCol>
      );
    }
    return predictions[drawIndex].map((number, idx) => (
      <MDBCol xs='4' sm='3' md='2' key={idx} className='number rounded-5'>
        <p>{number}</p>
      </MDBCol>
    ));
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <MDBSpinner />
      </div>
    )
  }

  if (error) {
    return <div className="text-danger mt-5">{error}</div>;
  }

  return (
    <div className="dailydraw-container">
      <h2 className='mt-5 ms-4 fw-bold'>Draws</h2>
      <div className='tabs'>
        {[1, 2, 3].map((tabIndex) => (
          <div key={tabIndex} className={`tab-card ${state === tabIndex ? 'active-tab' : ''}`} onClick={() => action(tabIndex)}>
            <div className='tab-body'>
              <h3>{`${tabIndex === 1 ? 'First Draw' : tabIndex === 2 ? 'Second Draw' : 'Third Draw'}`}</h3>
              <p>{`${tabIndex === 1 ? '1:00 pm' : tabIndex === 2 ? '6:00 pm' : '8:00 pm'}`}</p>
              <p>{todayStr}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="prediction-container">
        <h5 className='ms-4 mt-4'>Predicted Lucky Numbers</h5>
        <div className='contents shadow'>
          <MDBContainer fluid>
            <div className='content active-content'>
              <p className='pt-4'>{`${state === 1 ? 'First' : state === 2 ? 'Second' : 'Third'} Draw`}</p>
              <MDBRow className='justify-content-center'>
                {renderNumbers(state)}
              </MDBRow>
            </div>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}

export default Dailydraw;