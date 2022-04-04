import { createContext, useState } from "react";
import Login from "./components/login";
import User from "./components/user";
export const GlobalContext = createContext(null);

// useContext Hook is used for state mangement to avoid sending
// props to Child components

const ContextHook = () => {
  const [username, setUsername] = useState("");
  return (
    <>
      <h1>useContext Hook</h1>
      <GlobalContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </GlobalContext.Provider>
    </>
  );
};

export default ContextHook;
