import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Studentslist from './Studentslist';
import StudentDetails from './StudentDetails'
function App() {
  

  return (
    <>
    


<Router>
 <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Home/>}  />
<Route path='/Studentslist' element={<Studentslist/>}/>
<Route path='/StudentDetails' element={<StudentDetails></StudentDetails>}/>
      
    
  </Routes>   
</Router>


    </>
  )
}

export default App
