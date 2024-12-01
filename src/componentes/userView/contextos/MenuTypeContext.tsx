//  src/componentes/userView/contextos/MenuTypeContext.tsx

import React, { createContext, useState, ReactNode, useContext } from 'react';

interface MenuTypeContextType {
  menuType: string;
  setMenuType: (menuType: string) => void;
}

const MenuTypeContext = createContext<MenuTypeContextType | undefined>(undefined);

export const MenuTypeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuType, setMenuType] = useState<string>('extendido'); 
  
  return (
    <MenuTypeContext.Provider value={{ menuType, setMenuType }}>
      {children}
    </MenuTypeContext.Provider>
  );
};

export const useMenuType = (): MenuTypeContextType => {
  const context = useContext(MenuTypeContext);
  if (!context) {
    throw new Error('useMenuType debe ser usado dentro de un MenuTypeProvider');
  }
  return context;
};
