import React, { useState, useEffect } from 'react';
import './dailydraw.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBContainer, 
    MDBRow, 
    MDBCol
} from 'mdb-react-ui-kit';

function Dailydraw() {
  const [state, setState] = useState(1);
  const [numbers, setNumbers] = useState([
    { draw: 1, values: Array(10).fill('') },
    { draw: 2, values: Array(10).fill('') },
    { draw: 3, values: Array(10).fill('') }
  ]);
  const [visibleNumbers, setVisibleNumbers] = useState([
    Array(10).fill(false),
    Array(10).fill(false),
    Array(10).fill(false)
  ]);

  useEffect(() => {
    // Simulate fetching numbers from the backend
    const fetchNumbers = async () => {
      // Replace this with your actual API call
      const response = await new Promise(resolve => setTimeout(() => resolve([
        { draw: 1, values: [10, 13, 13, 13, 13, 10, 13, 13, 13, 13] },
        { draw: 2, values: [20, 13, 13, 13, 13, 20, 13, 13, 13, 13] },
        { draw: 3, values: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30] }
      ]), 1000));
      setNumbers(response);
      setVisibleNumbers(response.map(draw => draw.values.map(() => false)));
    };

    fetchNumbers();
  }, []);

  const action = (index) => {
    setState(index);
    console.log(index);
  };

  const toggleVisibility = (drawIndex, numberIndex) => {
    const newVisibility = [...visibleNumbers];
    if (!newVisibility[drawIndex][numberIndex]) {
      newVisibility[drawIndex][numberIndex] = true;
      setVisibleNumbers(newVisibility);
    }
  };

  const renderNumbers = (drawIndex) => (
    <div className='numbers d-flex flex-wrap'>
      {numbers[drawIndex]?.values.map((number, i) => (
        <div className='number' key={i} onClick={() => toggleVisibility(drawIndex, i)}>
          {visibleNumbers[drawIndex][i] && <p>{number}</p>}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h2 className='mt-5 ms-4'>Draws</h2>
      <div className='tabs'>
        <MDBCard style={{ borderRadius: '20px' }} className='ms-5'>
          <MDBCardBody onClick={() => action(1)} className={`tab ${state === 1 ? 'active-tab' : ''}`}>
            <MDBCardTitle className='text-center mt-5'>First Draw</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        <MDBCard style={{ borderRadius: '20px' }} className='ms-5'>
          <MDBCardBody onClick={() => action(2)} className={`tab ${state === 2 ? 'active-tab' : ''}`}>
            <MDBCardTitle className='text-center mt-5'>Second Draw</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        <MDBCard style={{ borderRadius: '20px' }} className='ms-5'>
          <MDBCardBody onClick={() => action(3)} className={`tab ${state === 3 ? 'active-tab' : ''}`}>
            <MDBCardTitle className='text-center mt-5'>Third Draw</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div>
        <h5 className='ms-4 mt-4'>Your Lucky Numbers</h5>
        <div className='contents shadow'>
          <MDBContainer>
            {state === 1 && (
              <div className='content active-content'>
                <p className=' pt-3 text-center'>First Draw</p>
                {renderNumbers(0)}
              </div>
            )}
            {state === 2 && (
              <div className='content active-content'>
                <p className='pt-3 text-center'>Second Draw</p>
                {renderNumbers(1)}
              </div>
            )}
            {state === 3 && (
              <div className='content active-content'>
                <p className='pt-3 text-center'>Third Draw</p>
                {renderNumbers(2)}
              </div>
            )}
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}

export default Dailydraw;
