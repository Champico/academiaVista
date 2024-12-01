// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserApp from './componentes/UserApp.tsx';
import AdminApp from './componentes/AdminApp.tsx';
import NotFound from './componentes/error/NotFound';
import './fonts/roboto-font.css';
import { UserSessionProvider } from "./contextos/UserSessionContext.tsx";

const App: React.FC = () => {
  return (
    <UserSessionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<UserApp />} />
          <Route path="/admin" element={<AdminApp />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Router>
    </UserSessionProvider>
  );
};

export default App;
