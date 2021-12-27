import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const contador = txtlength => {
    setCount(txtlength);
  };

  return (
    <div className="container">
      <textarea
        rows="3"
        onKeyUp={e => contador(e.target.value.length)}
      ></textarea>
      <div className="counter">{count}</div>
    </div>
  );
};

export default App;
