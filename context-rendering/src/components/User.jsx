import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CombinedContext } from "../contexts/CombinedContext";
import useRenderCount from "../hooks/useRenderCount";

const Users = () => {
  const renderUserCount = useRenderCount();
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);
  const { combinedState, toggleCombinedTheme } = useContext(CombinedContext);

  return (
    <div>
      <h1>User</h1>
      <div>Rendered {renderUserCount.current} times</div>
      <p>Is logged in: {isLoggedIn}</p>
      <button onClick={toggleLogin}>Toggle login</button>
      <h2>Combined state</h2>
      <p>Theme: {combinedState.theme}</p>
      <button onClick={toggleCombinedTheme}>Toggle combined theme</button>
    </div>
  );
};

export default Users;
