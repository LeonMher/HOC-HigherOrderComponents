import React from "react";
import WithCount from "../withCount";

const Hover = ({ handleFunc, count }) => {
  return (
    <>
      <h1 onMouseOver={handleFunc}>Hover me</h1>
      <p>Count: {count}</p>
    </>
  );
};

export default WithCount(Hover);
