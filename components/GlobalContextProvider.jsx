'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [globalContext, setGlobalContext] = useState({items: [], total: 0});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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


  // Fetch user data from server on app start
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const response = await fetch("/api/user"); // Replace with your API endpoint
        // if (!response.ok) throw new Error("Failed to fetch user");
        // const data = await response.json();
        return new Promise(resolve => {
            const data = {name: "고창남"};
            setTimeout(() => {
              resolve(data);
            }, 1);
          });
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider value={{ globalContext, incrementCounter, decrementCounter, user, setUser, loading, error }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
