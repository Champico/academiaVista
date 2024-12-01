// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserApp from './componentes/UserApp.tsx';
import AdminApp from './componentes/AdminApp.tsx';
import NotFound from './componentes/error/NotFound.tsx';
import HelpPage from './componentes/helpView/HelpPage.tsx'
import './fonts/roboto-font.css';
import { UserSessionProvider } from "./componentes/userView/contextos/UserSessionContext.tsx";
import { ScreenSizeProvider } from './ScreenSizeContext.tsx';

const App: React.FC = () => {
  return (
    <ScreenSizeProvider>
      <UserSessionProvider>
        <Router>
          <Routes>
            <Route path="/" element={<UserApp />} />
            <Route path="/admin" element={<AdminApp />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<Navigate to="/notfound" />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </Router>
      </UserSessionProvider>
    </ScreenSizeProvider>
  );
};

export default App;
