import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  // 방법1
  const context = useContext(UserContext);
  //console.log(context);

  // 방법2
  const {
    user: { name, loggedIn },
  } = useContext(UserContext);

  return (
    <header>
      <a href="#">Home</a>
      <p>Hello, {context.user.name}!</p> {/* 방법1 */}
      <p>Hello, {name}!</p> {/* 방법2 */}
      <p>You are {loggedIn ? "logged in" : "anonymous"}</p>
    </header>
  );
};

export default Header;
