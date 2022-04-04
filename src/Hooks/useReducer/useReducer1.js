import { useReducer } from "react";

// useReducer Hook is useful when we have a multiple states getting alterred with same event;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLE":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
  return (
    <div>
      <h1>useReducer Hook</h1>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE" });
        }}
      >
        Click Me
      </button>
      {state.showText ? "This is a Text" : null}
    </div>
  );
};

export default ReducerHook;
