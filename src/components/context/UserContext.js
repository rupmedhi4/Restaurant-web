import React, { createContext, useState } from 'react';

// Context create
export const UserContext = createContext();

// Provider
export const UserProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UserContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </UserContext.Provider>
  );
};
