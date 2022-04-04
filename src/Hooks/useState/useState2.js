import { useState } from "react";

const StateHook2 = () => {
  const [name, setName] = useState("Tushar");
  const handleChange = (e) => {
    // setName((prevName) => e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Enter something..."
      ></input>
      {name}
    </div>
  );
};

export default StateHook2;
