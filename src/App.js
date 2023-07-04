import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const handleAddSteps = () => {
    setSteps((s) => s + 1);
  };
  const handleSubtractSteps = () => {
    setSteps((s) => s - 1);
  };

  const handleAddCount = () => {
    setCount((c) => c + steps);
  };
  const handleSubtractCount = () => {
    setCount((c) => c - steps);
  };

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={handleSubtractSteps}>-</button>
        <span>Step:{steps}</span>
        <button onClick={handleAddSteps}>+</button>
      </div>
      <div>
        <button onClick={handleSubtractCount}>-</button>
        <span>Count:{count}</span>
        <button onClick={handleAddCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
