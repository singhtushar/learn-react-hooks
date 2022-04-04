// useEffect is a function which is called after the page renders
import axios from "axios";
import { useEffect, useState } from "react";
const EffectHook = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  return (
    <div>
      <h1>useEffect Hook</h1>
      {data.map((item) => {
        return <div key={item.id.toString()}>{item.email}</div>;
      })}
    </div>
  );
};

export default EffectHook;
