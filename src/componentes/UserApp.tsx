import { useState, useEffect } from 'react';
import Login from './userView/Login/Login';
import UserView from './userView/UserView';
import LoadingScreen from './globales/loadingScreen';

const UserApp = () => {
  const [userState, setUserState] = useState<number>(0); // 0: no logueado, 1: logueado, 2: error
  const [loading, setLoading] = useState<boolean>(true); // Indicador de carga

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:1235/user/main', {
          method: 'GET',
          credentials: 'include', 
        });
        console.log(response)
        if (response) {
          const data = await response.json();
          if (data.message === 'No ha iniciado sesión') {
            setUserState(0); // Usuario no logueado
          } else {
            setUserState(1); // Usuario autenticado
          }
        } else {
          setUserState(2); // Error o conexión fallida
        }
      } catch {
        setUserState(2); // Error de conexión
      } finally {
        setLoading(false); // Deja de mostrar la pantalla de carga
      }
    };

    fetchUserData();
  }, []);

  // Renderizar pantalla de carga mientras se obtiene la respuesta
  if (loading) {
    return <LoadingScreen />;
  }

  // Renderizar componente según el estado del usuario
  if (userState === 0) {
    return <Login />;
  }

  if (userState === 1) {
    return <UserView />;
  }

  // Si hay un error o el fetch falla, se podría mostrar una vista de error
  return <div>Error de conexión. Intenta nuevamente más tarde.</div>;
};

export default UserApp;
