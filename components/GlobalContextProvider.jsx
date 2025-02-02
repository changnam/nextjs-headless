'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [globalContext, setGlobalContext] = useState({ items: [], total: 0 });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const incrementCounter = () => {
    setGlobalContext((prev) => {
      console.log("incrementCounter called: " + prev.total);
      return { ...prev, total: prev.total + 1 };
    });
  };

  const decrementCounter = () => {
    setGlobalContext((prev) => {
      console.log("decrementCounter called: " + prev.total);
      return { ...prev, total: prev.total - 1 };
    });
  };

  // Fetch user data from server on app start
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Simulating an API call
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({ name: "고창남" });
          }, 1000);
        });

        setUser(data);  // ✅ Now this executes
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);  // ✅ Ensures loading is set to false after fetch
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
