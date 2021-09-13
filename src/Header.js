import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();

  return (
    <header>
      <a href="#">Home</a>
      <p>Hello, {name}!</p>
      <p>You are {loggedIn ? "logged in" : "anonymous"}</p>
    </header>
  );
};

export default Header;
