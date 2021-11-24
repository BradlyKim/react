import { useState } from "react";

const Test3 = () => {
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm(e.target.value);
  };
  const handleClick = () => {
    alert(form);
    setForm("");
  };
  return (
    <>
      <input
        value={form}
        type="text"
        placeholder="값을 입력하세요"
        onChange={handleChange}
      />

      <button onClick={handleClick}>추가</button>
    </>
  );
};

export default Test3;
