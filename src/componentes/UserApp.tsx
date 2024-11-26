// componentes/UserApp.tsx

import {useEffect } from 'react';
import { useUserSession } from '../contextos/UserSessionContext'
import Login from './userView/Login/Login';
import UserView from './userView/UserView';
import LoadingScreen from './globales/LoadingScreen';

const UserApp = () => {
  //Contexto
  const { userSession, setUserSession } = useUserSession();

  //Solo hacer al iniciar
  useEffect(() => {
    const timer = setTimeout(async () => {
      await fetchUserData();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const fetchUserData = async () => {

    try {
      const url = 'http://localhost:1235/user/session/status'
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
    });

      if (response) {
        const data = await response.json();
        if (data.message === 'No ha iniciado sesión') {
          setUserSession(0);
        } else {
          setUserSession(1);
        }
      } else {
        setUserSession(0);
      }
    } catch {
      setUserSession(0);
    }
  }

  if (userSession === null) {
    return <LoadingScreen/>
  }

  if (userSession === 1) {
    return <UserView/>;
  }

  if (userSession === 0) {
    return <Login />;
  }
};

export default UserApp;
