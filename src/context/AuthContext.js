"use client"
// AuthContext.js
import { createContext, useState, useContext, useEffect } from "react";
import auth from "@/firebase/fire-auth";
import { onAuthStateChanged } from "firebase/auth";
// Create the Auth Context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // check for user function (example)
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    })

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the AuthContext in other components
export const useAuth = () => useContext(AuthContext);
