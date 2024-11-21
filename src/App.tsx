// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserApp from './componentes/UserApp.tsx';
import AdminApp from './componentes/AdminApp.tsx';
import NotFound from './componentes/error/NotFound';
import './fonts/roboto-font.css';

const App:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserApp/>} />
        <Route path="/admin" element={<AdminApp/>} />
        <Route path="*" element={<Navigate to="/notfound" />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
