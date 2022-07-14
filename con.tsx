import React from "react";
const UserContext = React.createContext();

function App() {
  const user = {
      name: "mk",
  };

  return (
    <UserContext.Provider value={user}>
      <UserGreeter />
    </UserContext.Provider>
  );
}

function UserGreeter() {
  const user = React.useContext(UserContext);

  if (!user) return <p>Hello stranger!</p>;
  return <p>Hello ${user.name}</p>;
}
