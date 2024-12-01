import React, { createContext, useState, ReactNode, useContext } from 'react';

// Definir el tipo para el contexto
interface VentanaContextType {
    ventana: string;
    setVentana: (ventana: string) => void;
}

// Crear el contexto con valores iniciales
const VentanaContext = createContext<VentanaContextType | undefined>(undefined);

// Componente proveedor que envuelve la aplicación
export const VentanaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ventana, setVentana] = useState<string>('Academias'); // Estado de ventana

    return (
        <VentanaContext.Provider value={{ ventana, setVentana }}>
            {children}
        </VentanaContext.Provider>
    );
};

// Hook personalizado para acceder al contexto
export const useVentana = (): VentanaContextType => {
    const context = useContext(VentanaContext);
    if (!context) {
        throw new Error('useVentana debe ser usado dentro de un VentanaProvider');
    }
    return context;
};
