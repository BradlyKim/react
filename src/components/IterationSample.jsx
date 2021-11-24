import React, { useRef, useState } from "react";

const IterationSample = () => {
  // const [nextId, setNextId] = useState(3);
  const nextId = useRef(3);
  const [text, setText] = useState("");
  const [arr, setArr] = useState([
    {
      id: 1,
      text: "눈사람",
    },
    {
      id: 2,
      text: "얼음",
    },
  ]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setArr([...arr, { id: nextId, text: text }]);
    // const newArr = [...arr]
    // newArr.push({id:0, text:text})
    // setArr((newArr))
    nextId.current = nextId.current + 1;
    setText("");
  };
  const handleDelete = (id) => {
    const newArr = arr.filter((e) => e.id !== id);
    console.log(newArr);
    setArr(newArr);
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
      <button onClick={handleDelete}>삭제</button>
      <ul>
        {arr.map((e) => (
          <li key={e.id} onDoubleClick={() => handleDelete(e.id)}>
            {e.id}.{e.text} 입니다.
          </li>
        ))}
      </ul>
    </>
  );
};
export default IterationSample;
