import React, { createContext, useState } from 'react';

// Context create
export const UserContext = createContext();

// Provider
export const UserProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addItem, setAddItem] = useState([]);

  return (
    <UserContext.Provider 
      value={{ 
        isOpen, setIsOpen,
        addItem, setAddItem
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
