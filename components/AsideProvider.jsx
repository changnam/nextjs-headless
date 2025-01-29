'use client';

import React, { createContext, useState, useContext } from 'react';

const AsideContext = createContext();

export function AsideProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAside = () => setIsOpen((prev) => !prev);

  return (
    <AsideContext.Provider value={{ isOpen, toggleAside }}>
      {children}
    </AsideContext.Provider>
  );
}

export function useAside() {
  return useContext(AsideContext);
}
