import React from "react";
import "./App.css";

const UseState = () => {
  const [count, setCount] = React.useState(0);
  //   var count = 0;

  const incrementCount = () => {
    // count = count + 1;
    setCount((count) => {
      return count + 1;
    });
  };

  const decrementCount = () => {
    setCount((countVal) => {
      if (countVal <= 0) {
        return countVal;
      } else {
        return countVal - 1;
      }
    });
  };

  return (
    <div className="App">
      <h1 className="font-bold">UseState</h1>

      <button onClick={incrementCount} className="Btn">
        Increment
      </button>
      <h1 className="font-bold">{count}</h1>
      <button onClick={decrementCount} className="Btn Bg">
        Decrement
      </button>
    </div>
  );
};

export default UseState;
