
import './index.css';
import Athentication from './Components/pages/Athentication';
import Home from './Components/pages/home';
import EmployeeList from './Components/pages/employeelist';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AddEmployee from './Components/pages/Addemployee';
import Nav from './Components/navbar';
import PrivateRoute from './Components/privateroot';

function App() {
  return (
    <div>

  
      
      <BrowserRouter>

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/employeelist" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />

        <Route path="/add" element={<PrivateRoute><AddEmployee /></PrivateRoute>} />
        <Route path="/login" element={<Athentication />} />
      
      </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
