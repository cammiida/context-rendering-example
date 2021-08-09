import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import useRenderCount from "../hooks/useRenderCount";

const Notifications = () => {
  const renderCount = useRenderCount();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <h1>Notifications</h1>
      <div>Rendered {renderCount.current} times</div>
      <ul>{theme}</ul>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Is logged in {isLoggedIn}</p>
    </div>
  );
};

export default Notifications;
