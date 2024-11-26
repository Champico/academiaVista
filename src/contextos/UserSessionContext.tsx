// src/contexts/UserSessionContext.tsx

import React, { createContext, useState, useContext } from "react";

// Crear el contexto con un tipo adecuado
interface UserSessionContextType {
    userSession: number | null; // null: no definido, 0: sin cuenta, 1: con cuenta
    setUserSession: React.Dispatch<React.SetStateAction<number | null>>;
}

// Creamos el contexto
export const UserSessionContext = createContext<UserSessionContextType | undefined>(undefined);

// Proveedor del contexto
export const UserSessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userSession, setUserSession] = useState<number | null>(null); // Inicializa en null (indefinido)

    return (
        <UserSessionContext.Provider value={{ userSession, setUserSession }}>
            {children}
        </UserSessionContext.Provider>
    );
};

export const useUserSession = () => {
    const context = useContext(UserSessionContext);
    if (!context) {
        throw new Error("useUserSession debe ser usado dentro de UserSessionProvider");
    }
    return context;
};
