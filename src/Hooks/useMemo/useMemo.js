// useMemo is used basically for memoizing the value of a
// computational function
// This optimization helps to avoid expensive
// calculations on every render.

// useMemo returns a memoized value

import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const MemoHook = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((fetchResponse) => {
        setData(fetchResponse.data);
      });
  }, []);
  const findLongestCommentName = (data) => {
    if (data.length === 0) return null;
    let longestComment = "";
    let longestCommentName = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].body > longestComment) {
        longestCommentName = data[i].name;
        longestComment = data[i].body;
      }
    }
    console.log("COMPUTED");
    return longestCommentName;
  };

  const getLongestName = useMemo(() => findLongestCommentName(data), [data]);

  return (
    <div>
      <h1>useMemo Hook</h1>
      <h3>{getLongestName}</h3>
      {toggle ? "TOGGLE" : ""}
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

export default MemoHook;
