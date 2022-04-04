import { useRef, useState } from "react";

//This hook is useful when you want to manipulate the DOM or access the DOM

const RefHook = () => {
  const [name, setName] = useState("Tushar");
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
    setName(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>useRef Hook</h1>
      {name}
      <input type="text" placeholder="Enter your name..." ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default RefHook;
