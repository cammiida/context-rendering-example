import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useRenderCount from "../hooks/useRenderCount";

const Users = () => {
  const renderUserCount = useRenderCount();
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  return (
    <div>
      <h1>User</h1>
      <div>Rendered {renderUserCount.current} times</div>
      <p>Is logged in: {isLoggedIn}</p>
      <button onClick={toggleLogin}>Toggle login</button>
    </div>
  );
};

export default Users;
