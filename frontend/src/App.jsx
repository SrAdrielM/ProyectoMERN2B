import {BrowserRouter as Router, Routes, Route} 
from 'react-router'
import './App.css';

import Nav from "./components/NavBar"
import Products from './pages/Products'
import Branches from './pages/Branches'

function App() {

  return (
    <>
      <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Branches" element={<Branches/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
