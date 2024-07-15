
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Component/Sidebar';
import Dailydraw from './Pages/Dailydraw';
import Analysis from './Pages/Analysis';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Sidebar>
      <Routes>
        <Route path='/' element={<Dailydraw/>}/>
        <Route path='/analysis' element={<Analysis/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
