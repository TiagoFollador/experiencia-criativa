import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminPage } from './pages/AdminPage/AdminPage';
import { UserDataPage } from './pages/UserDataPage/UserDataPage';
import { UsersPage } from './pages/UsersPage/UsersPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UsersPage  />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/user/:id" element={<UserDataPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
