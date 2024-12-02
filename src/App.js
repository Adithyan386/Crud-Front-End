import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormEmp from './FormEmp';
import TableEmp from './TableEmp';

function App() {
  return (
  
     <>

      <Routes>
      <Route path='/' element={<TableEmp/>}/>
        <Route path='/formEmp' element={<FormEmp/>}/>
        <Route path='/Table' element={<TableEmp/>}/>
      </Routes>
      
      </>
      
    
  );
}

export default App;
