// src/contexts/UserSessionContext.tsx

import React, { createContext, useState, useContext } from "react";
import {User} from '../../types/User.ts'


interface UserSessionContextType {
    user: User | null; // null si no está logueado
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserSessionContext = createContext<UserSessionContextType | undefined>(undefined);

export const UserSessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserSessionContext.Provider value={{ user, setUser }}>
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


