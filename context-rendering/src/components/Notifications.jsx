import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CombinedContext } from "../contexts/CombinedContext";
import { ThemeContext } from "../contexts/ThemeContext";
import useRenderCount from "../hooks/useRenderCount";

const Notifications = () => {
  const renderCount = useRenderCount();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);
  const { combinedState, toggleCombinedLogin } = useContext(CombinedContext);

  return (
    <div>
      <h1>Notifications</h1>
      <div>Rendered {renderCount.current} times</div>
      <ul>{theme}</ul>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Is logged in {isLoggedIn}</p>
      <h2>Combined state</h2>
      <p>Is logged in: {combinedState.isLoggedIn}</p>
      <button onClick={toggleCombinedLogin}>Toggle combined login</button>
    </div>
  );
};

export default Notifications;
