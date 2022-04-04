import { useContext } from "react";
import { GlobalContext } from "../useContext";

const Login = ({ handleSetUsername }) => {
  const { setUsername } = useContext(GlobalContext);
  return (
    <div>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter your username..."
      />
    </div>
  );
};

export default Login;
