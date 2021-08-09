import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevValue) => !prevValue);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
