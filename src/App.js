import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import FormEmp from './FormEmp';
import TableEmp from './TableEmp';

function App() {
  return (
  
     <>

      <Routes>
      <Route path='/' element={<TableEmp/>}></Route>
        <Route path='/formEmp' element={<FormEmp/>}></Route>
        <Route path='/Table' element={<TableEmp/>}></Route>
      </Routes>
      
      </>
      
    
  );
}

export default App;
