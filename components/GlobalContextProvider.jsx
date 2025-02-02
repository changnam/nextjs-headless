'use client';

import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [globalContext, setGlobalContext] = useState({items: [], total: 0});

  const incrementCounter = () => {
    //console.log("incrementCounter called"+globalContext.total);
    setGlobalContext(
        function (prev){
            console.log("incrementCounter called"+prev.total);
            return {...prev, total: prev.total +1}
          }
    );
        // (prev) => ({ ...prev, total: prev.total + 1 }));
    //console.log("incrementCounter called after"+globalContext.total);
  }
  const decrementCounter = () => {
    setGlobalContext(
        function(prev){
            console.log("decrementCounter called"+prev.total);
            return {...prev, total: prev.total -1}
        } 
    );
  };

  return (
    <GlobalContext.Provider value={{ globalContext, incrementCounter, decrementCounter }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
