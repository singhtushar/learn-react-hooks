import { useEffect } from "react";

const Child = ({ getText }) => {
  useEffect(() => {
    console.log("getText was called");
  }, [getText]);
  return <h2>{getText("Tushar")}</h2>;
};

export default Child;
