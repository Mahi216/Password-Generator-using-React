import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  let addValue = () => {
    setCount(count + 1);
    console.log(count);
  };

  let removeValue = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <h1>hello world</h1>
      <h2>visit count: {count}</h2>
      <button onClick={addValue}>Add count</button>{" "}
      <button onClick={removeValue}>Remove count</button>
      <p>footer: {count}</p>
    </>
  );
}

export default App;
