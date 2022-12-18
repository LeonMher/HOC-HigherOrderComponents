import React, { useState } from "react";
import WithCount from "../withCount";

const Counter = ({ handleFunc, count }) => {
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleFunc}>increment</button>
    </>
  );
};

export default WithCount(Counter);
