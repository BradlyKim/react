import { useState } from "react";

const EventPractice = () => {
  //   const [message, setMessage] = useState("");
  //   const [username, setUsername] = useState("");
  const [form, setForm] = useState({ username: "", message: "" });

  const { username, message } = form;
  //   const handleChange = (e) => setMessage(e.target.value);
  //   const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextForm = {
      ...form,
      [name]: value,
    };
    setForm(nextForm);
  };

  const handleClick = () => {
    alert(username + ":" + message + "입니다.");
    setForm({ username: "", message: "" });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요."
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};
export default EventPractice;
