import {BrowserRouter as Router, Routes, Route} 
from 'react-router'
import './App.css';

import Nav from "./components/NavBar"
import Products from './pages/Products'
import Customers from './pages/Customers'

function App() {

  return (
    <>
      <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Customers" element={<Customers/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
