import { useState } from "react";
const StateHook = (props) => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
    // setCounter(counter + 1);
  };
  return (
    <div>
      <h1>useState Hook</h1>
      <button onClick={handleIncrement}>Increment</button>
      {counter}
    </div>
  );
};

export default StateHook;
