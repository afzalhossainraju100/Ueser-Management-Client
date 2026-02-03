import React from "react";
import "./App.css";
import Users from "./Component/Users.jsx";

const usersPromise = fetch("http://localhost:5000/users").then((res) =>
  res.json(),
);

function App() {
  return (
    <>
      <h1>user management</h1>
      <Users usersPromise={usersPromise}></Users>
    </>
  );
}

export default App;
