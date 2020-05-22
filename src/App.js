import React, { useState } from "react";

const App = () => {
  const state = useState();
  const [count, setCount] = useState(0);
  const IncNum = () => {
    console.log("clicked");

    setCount(count + 1);
  };
  // console.log(state);

  return (
    <>
      <div className="main">
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button>
      </div>
    </>
  );
};
export default App;
