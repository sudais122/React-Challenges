import { useState } from "react";
import './App.css'
const App = () => {
  const [value, setvalue] = useState(0);

  function increse() {
    setvalue(value + 1);
  }
  function decrese() {
    value > 0 ? setvalue(value - 1) : setvalue()
  }
  return (
    <>
      <div className="container">
        <button onClick={increse}>+</button>
        <p>{value}</p>
        <button onClick={decrese} disabled={value === 0}>
          -
        </button>
      </div>
    </>
  );
};

export default App;
