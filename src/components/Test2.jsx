import { useState } from "react";

const Test2 = () => {
  const [array, setArray] = useState(["눈사람"]);
  const [form, setForm] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setForm(e.target.value);
  };

  const handleAlert = () => {
    setArray([...array, form]);
    setForm("");
  };

  return (
    <>
      <div>
        <input
          value={form}
          type="text"
          placeholder="값을 입력하세요"
          onChange={handleChange}
        />

        <button onClick={handleAlert}>확인</button>

        <ul>
          {array.map((e, i) => (
            <li key={i}>{e} 입니다.</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Test2;
