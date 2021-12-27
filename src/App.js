import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const updates = e => {
    setCount(e.target.value.length);
  };

  return (
    <div className="container">
      <textarea rows="3" onChange={e => updates(e)}></textarea>
      <div className="counter">{count}</div>
    </div>
  );
};

export default App;
