//  src/ScreenSizeContext.tsx

import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

// Tipo del contexto
interface ScreenSizeContextType {
    screenSize: string;
    setScreenSize: (size: string) => void;
}

// Crear el contexto
const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(undefined);

// Proveedor del contexto
export const ScreenSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [screenSize, setScreenSize] = useState<string>(getScreenSize());

    // Función para determinar el tamaño inicial de la pantalla
    function getScreenSize(): string {
        const width = window.innerWidth;
        if (width < 680) return 'small';
        if (width < 1000) return 'medium';
        return 'large';
    }

    // useEffect para detectar cambios en el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            const newSize = getScreenSize();
            setScreenSize(newSize);
        };

        window.addEventListener('resize', handleResize);

        // Limpieza del event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useScreenSize = (): ScreenSizeContextType => {
    const context = useContext(ScreenSizeContext);
    if (!context) {
        throw new Error('useScreenSize debe ser usado dentro de un ScreenSizeProvider');
    }
    return context;
};
