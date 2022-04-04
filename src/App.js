import "./App.css";
import CallbackHook from "./Hooks/useCallback/useCallback";
import ContextHook from "./Hooks/useContext/useContext";
import EffectHook from "./Hooks/useEffect/useEffect";
import MemoHook from "./Hooks/useMemo/useMemo";
import ReducerHook from "./Hooks/useReducer/useReducer1";
import RefHook from "./Hooks/useRef/useRef";
import StateHook from "./Hooks/useState/useState1";
import StateHook2 from "./Hooks/useState/useState2";
import StateHook3 from "./Hooks/useState/useState3";

function App() {
  return (
    <div className="App">
      <StateHook />
      <StateHook2 />
      <StateHook3 />
      <ReducerHook />
      <EffectHook />
      <RefHook />
      <ContextHook />
      <MemoHook />
      <CallbackHook />
    </div>
  );
}

export default App;
