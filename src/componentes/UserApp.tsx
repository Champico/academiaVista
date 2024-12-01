// componentes/UserApp.tsx

//Hooks
import { useEffect,useState } from 'react';
import { useUserSession } from '../contextos/UserSessionContext';

//Componentes
import Login from './userView/Login/Login';
import UserView from './userView/UserView';
import LoadingScreen from './globales/LoadingScreen';

//Tipos de dato
import { User } from './types/User'



const UserApp = () => {
  //Hooks
  const { user, setUser } = useUserSession();  //Usuario
  const [loading, setLoading] = useState(true);  //Cargando

  useEffect(() => {
    fetchUserData();
    const interval = setInterval(() => {
      fetchUserData();
    }, 5 * 60 * 1000); 
    return () => clearInterval(interval);  
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

        if (data.message || !data.correo || !data.nombre || !data.rol) setUser(null);

        const usuario: User = {
          correo: data.correo,
          nombre: data.nombre,
          rol: data.rol as "docente" | "coordinador",
          clave: data.clave || null,
          paterno: data.paterno || null,
          materno: data.materno || null,
          id_facultad: data.id_facultad || null,
          id: data.id || null
        };

        console.log("Usuario en UserApp", usuario)
        setUser(usuario);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }finally {
      setLoading(false);
    }

  }

  if (loading) return <LoadingScreen/>
  return user ? <UserView /> : <Login />;
};

export default UserApp;
