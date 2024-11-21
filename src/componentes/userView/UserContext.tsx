// src/contexts/UserContext.tsx

import React, { createContext, useContext, useState } from 'react';

// Definimos el tipo para el usuario
interface User {
    nombre: string;
    correo: string;
    src: string;
    dependencia: string;
}

// Valor predeterminado del usuario
const defaultUser: User = {
    nombre: "Felipe de Jesus Gonzales",
    correo: "fiji@uv.mx",
    src: "/assets/images/temp/gallo.jpg",
    dependencia: "Facultad de Estadistica e Informatica"
};

// Creamos el contexto con el valor predeterminado y un tipo opcional para actualizar el usuario
const UserContext = createContext<{ user: User; setUser: React.Dispatch<React.SetStateAction<User>> | null }>({
    user: defaultUser,
    setUser: null
});

// Componente Provider
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState(defaultUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para acceder al contexto
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

export default UserContext;
