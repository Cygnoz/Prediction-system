import React, { useState, useEffect } from 'react';
import './dailydraw.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBSpinner
} from 'mdb-react-ui-kit';
import axios from 'axios';

function Dailydraw() {
  const [state, setState] = useState(1);
  const [predictions, setPredictions] = useState({
    1: [],
    2: [],
    3: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPredictions();
  }, []);

  const fetchPredictions = async () => {
    setLoading(true);
    setError(null);
    try {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowStr = tomorrow.toISOString().split('T')[0];
      const response = await axios.get(`http://localhost:5000/api/get_predict?date=${tomorrowStr}&n_predictions=10`);
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
    return predictions[drawIndex].map((number, idx) => (
      <MDBCol xs='4' sm='3' md='2' key={idx} className='number rounded-5'>
        <p>{number}</p>
      </MDBCol>
    ));
  };

  if (loading) {
    return ( <div className="spinner-container">
    <MDBSpinner />
  </div>
    )
  }

  if (error) {
    return <div className="text-danger mt-5">{error}</div>;
  }

  return (
    <div>
      <h2 className='mt-5 ms-4'>Draws</h2>
      <div className='tabs'>
        {[1, 2, 3].map((tabIndex) => (
          <div key={tabIndex} className={`tab-card ${state === tabIndex ? 'active-tab' : ''}`} onClick={() => action(tabIndex)}>
            <div className='tab-body'>
              <h3>{`${tabIndex === 1 ? 'First Draw' : tabIndex === 2 ? 'Second Draw' : 'Third Draw'}`}</h3>
              <p>{`${tabIndex === 1 ? '1:00 pm' : tabIndex === 2 ? '6:00 pm' : '8:00 pm'}`}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h5 className='ms-4 mt-4'>Predicted Lucky Numbers</h5>
        <div className='contents shadow'>
          <MDBContainer>
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
