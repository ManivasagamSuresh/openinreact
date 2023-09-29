
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/DashBoard';
import Signup from './components/Signup';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/'   element={<Login/>}/>
          <Route path='/signup'   element={<Signup/>}/>
          <Route path='/dashBoard'   element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
