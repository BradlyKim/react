import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  // const [color, setColor] = useState("");
  const [style, setStyle] = useState({ color: "black", background: "gray" });

  const handleEnter = () => {
    setMessage("안녕하세요");
  };
  const handleLeave = () => {
    setMessage("안녕히 가세요");
  };

  const handleColor = (color) => {
    setStyle((prev) => ({ ...prev, color }));
  };

  return (
    <>
      <div>
        <button onClick={handleEnter}>입장</button>
        <button onClick={handleLeave}>퇴장</button>
        <h1 style={style}>{message}</h1>

        <button style={{ color: "red" }} onClick={() => handleColor("red")}>
          빨간색
        </button>
        <button style={{ color: "green" }} onClick={() => handleColor("green")}>
          초록색
        </button>
        <button style={{ color: "blue" }} onClick={() => handleColor("blue")}>
          파란색
        </button>
        <button style={{ color: "black" }} onClick={() => handleColor("black")}>
          검정색
        </button>
      </div>
    </>
  );
};

export default Say;
