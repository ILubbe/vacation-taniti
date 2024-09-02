import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Lodging from './components/pages/Lodging';
import Entertainment from './components/pages/Entertainment';
import Food from './components/pages/Food';
import Transportation from './components/pages/Transportation';
import Stores from './components/pages/Stores';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/lodging' exact Component={Lodging} />
          <Route path='/entertainment' exact Component={Entertainment} />
          <Route path='/food' exact Component={Food} />
          <Route path='/transportation' exact Component={Transportation} />
          <Route path='/stores' exact Component={Stores} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
