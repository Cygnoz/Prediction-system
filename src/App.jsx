import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './Component/Sidebar';
import Dailydraw from './Pages/Dailydraw';
import Analysis from './Pages/Analysis';
import Login from './Pages/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './Component/PrivateRoute';

function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/';

  return (
    <AuthProvider>
      <div className="App">
        {showSidebar ? (
          <div className="main">
            <Sidebar>
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path='/home' element={<Dailydraw />} />
                  <Route path='/analysis' element={<Analysis />} />
                </Route>
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
    </AuthProvider>
  );
}

export default App;
