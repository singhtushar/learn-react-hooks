import { useCallback, useState } from "react";
import Child from "./child";

// useCallback hook is used to memoize a function
const CallbackHook = () => {
  const [text, setText] = useState("Hello World");
  const [toggle, setToggle] = useState(false);
  // since getText function is called component every time
  // state the changes, hence we need to useCallback hook to memoize
  // the function

  //   const getText = (name) => {
  //     return text + " " + name;
  //   };

  const getText = useCallback(
    (name) => {
      return text + " " + name;
    },
    [text] // -> dependency arrayList
  );
  return (
    <div>
      <h1>useCallback Hook</h1>
      <Child getText={getText} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default CallbackHook;
