import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useRenderCount from "../hooks/useRenderCount";
import { authState, textState } from "../state/atoms";

const User = () => {
  const renderUserCount = useRenderCount();
  const text = useRecoilValue(textState);
  const [auth, setAuth] = useRecoilState(authState);

  const toggleLogin = () => {
    setAuth((prevState) => ({
      ...prevState,
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  return (
    <div>
      <h1>User</h1>
      <h2>Username: {text}</h2>
      <div>Rendered {renderUserCount.current} times</div>
      <p>Is logged in: {auth.isLoggedIn ? "true" : "false"}</p>
      <button onClick={toggleLogin}>Toggle login</button>
    </div>
  );
};

export default User;
