// multiple events with one button click

import { useState } from "react";

const StateHook3 = () => {
  const [showText, setShowText] = useState(false);
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleToggle = () => {
    setShowText((prevToggle) => !prevToggle);
  };
  return (
    <div>
      {count}
      <button
        onClick={() => {
          handleIncrement();
          handleToggle();
        }}
      >
        Click
      </button>
      {showText && "Show"}
    </div>
  );
};

export default StateHook3;
