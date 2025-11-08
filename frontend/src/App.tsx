import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PublicTraining from './components/PublicTraining';
import './App.css';

function App() {
  const user = localStorage.getItem('user');
  
  return (
    <Router>
      <Routes>
        <Route path="/training/:shareId" element={<PublicTraining />} />
        <Route path="/" element={!user ? <Login /> : <Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;