import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div style={{ paddingLeft: 100 }}>
      <h1>값: {number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Counter;
