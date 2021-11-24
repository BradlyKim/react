import { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(7);
  const handlePlus = (n) => setNumber(number + n);
  return (
    <>
      <h1>현재 카운터 값은 {number}입니다.</h1>
      <div>
        <button onClick={() => handlePlus(1)}>+1</button>
        <button onClick={() => handlePlus(-1)}>-1</button>
      </div>
    </>
  );
};

export default Counter2;
