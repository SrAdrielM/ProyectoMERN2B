import {BrowserRouter as Router, Routes, Route} 
from 'react-router'
import './App.css';

import Nav from "./components/NavBar"
import Products from './pages/Products'
import Customers from './pages/Customers'
import Employees from './pages/Employees'

function App() {

  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Customers" element={<Customers/>}/>
        <Route path="/Employees" element={<Employees/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
