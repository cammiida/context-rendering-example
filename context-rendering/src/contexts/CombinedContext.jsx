import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CombinedContext = createContext();

const CombinedContextProvider = ({ children }) => {
  const [combinedState, setCombinedState] = useState({
    theme: "light",
    isLoggedIn: false,
  });

  const toggleCombinedLogin = () => {
    setCombinedState((prevState) => {
      return { ...prevState, isLoggedIn: !prevState.isLoggedIn };
    });
  };

  const toggleCombinedTheme = () => {
    setCombinedState((prevState) => {
      return {
        ...prevState,
        theme: prevState.theme === "light" ? "dark" : "light",
      };
    });
  };

  return (
    <CombinedContext.Provider
      value={{ combinedState, toggleCombinedLogin, toggleCombinedTheme }}
    >
      {children}
    </CombinedContext.Provider>
  );
};

export default CombinedContextProvider;
