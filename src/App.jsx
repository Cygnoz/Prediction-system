import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './Component/Sidebar';
import Dailydraw from './Pages/Dailydraw';
import Analysis from './Pages/Analysis';
import Login from './Pages/Login';

function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/';

  return (
    <div className="App">
      {showSidebar ? (
        <div className="main">
          <Sidebar>
            <Routes>
              <Route path='/home' element={<Dailydraw />} />
              <Route path='/analysis' element={<Analysis />} />
            </Routes>
          </Sidebar>
        </div>
      ) : (
        <div className="full-content">
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
