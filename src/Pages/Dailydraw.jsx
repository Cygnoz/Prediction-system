import React, { useState } from 'react';
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
  const [visibleNumbers, setVisibleNumbers] = useState({
    1: Array(10).fill(false),
    2: Array(10).fill(false),
    3: Array(10).fill(false)
  });

  const action = (index) => {
    setState(index);
  }

  const toggleNumberVisibility = (draw, numberIndex) => {
    setVisibleNumbers(prev => ({
      ...prev,
      [draw]: prev[draw].map((visible, idx) => idx === numberIndex ? !visible : visible)
    }));
  }

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
                            <p className='pt-4'>First Draw</p>
                            <MDBRow style={{ marginLeft: '20px' }}>
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <MDBCol md='1' key={idx} className='number m-4 rounded-5' onClick={() => toggleNumberVisibility(1, idx)}>
                                        {visibleNumbers[1][idx] && <p>{18 + idx}</p>}
                                    </MDBCol>
                                ))}
                            </MDBRow>
                            <MDBRow style={{ marginLeft: '20px' }}>
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <MDBCol md='1' key={idx + 5} className='number m-4 rounded-5' onClick={() => toggleNumberVisibility(1, idx + 5)}>
                                        {visibleNumbers[1][idx + 5] && <p>{18 + idx}</p>}
                                    </MDBCol>
                                ))}
                            </MDBRow>
                        </div>
                    )}
                    {state === 2 && (
                        <div className='content active-content'>
                            <p className='m-3'>Second Draw</p>
                            <MDBRow style={{ marginLeft: '20px' }}>
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <MDBCol md='1' key={idx} className='number m-4 rounded-5' onClick={() => toggleNumberVisibility(2, idx)}>
                                        {visibleNumbers[2][idx] && <p>{18 + idx}</p>}
                                    </MDBCol>
                                ))}
                            </MDBRow>
                            <MDBRow style={{ marginLeft: '20px' }}>
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <MDBCol md='1' key={idx + 5} className='number m-4 rounded-5' onClick={() => toggleNumberVisibility(2, idx + 5)}>
                                        {visibleNumbers[2][idx + 5] && <p>{18 + idx}</p>}
                                    </MDBCol>
                                ))}
                            </MDBRow>
                        </div>
                    )}
                    {state === 3 && (
                        <div className='content active-content'>
                            <p className='m-3'>Third Draw</p>
                            <MDBRow style={{ marginLeft: '20px' }}>
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <MDBCol md='1' key={idx} className='number m-4 rounded-5' onClick={() => toggleNumberVisibility(3, idx)}>
                                        {visibleNumbers[3][idx] && <p>{18 + idx}</p>}
                                    </MDBCol>
                                ))}
                            </MDBRow>
                            <MDBRow style={{ marginLeft: '20px' }}>
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <MDBCol md='1' key={idx + 5} className='number m-4 rounded-5' onClick={() => toggleNumberVisibility(3, idx + 5)}>
                                        {visibleNumbers[3][idx + 5] && <p>{18 + idx}</p>}
                                    </MDBCol>
                                ))}
                            </MDBRow>
                        </div>
                    )}
                </MDBContainer>
            </div>
        </div>
    </div>
  );
}

export default Dailydraw;
