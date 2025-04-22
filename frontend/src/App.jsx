import React from 'react';
import './App.css';
import Users from './pages/Users/Users';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AdminPage } from './pages/AdminPage/AdminPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users  />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
