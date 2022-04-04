import { useContext } from "react";
import { GlobalContext } from "../useContext";

const User = () => {
  const { username } = useContext(GlobalContext);
  return (
    <div>
      <h3>Username: {username} </h3>
    </div>
  );
};

export default User;
