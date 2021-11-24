import { useState, useEffect, useRef } from "react";

const Info = () => {
  const [yourName, setYourName] = useState("");
  const [yourNickName, setYourNickName] = useState("");
  const nameInputEL = useRef(null);
  const fileUpload = useRef(null);

  useEffect(() => {
    console.log("랜더링이 완료.");
    console.log({ yourName, yourNickName });
  });

  //   useEffect(() => {
  //     console.log("최초 랜더링이 완료.");
  //     return () => {
  //       console.log("clean up");
  //     };
  //   });
  const onChangeName = (e) => setYourName(e.target.value);
  const onChangeNick = (e) => setYourNickName(e.target.value);
  const onErase = () => {
    setYourName("");
    setYourNickName("");
    nameInputEL.current.focus();
  };
  const handleUpload = () => {
    fileUpload.current.click();
    console.log({ fileUpload });
  };

  return (
    <>
      <input
        ref={nameInputEL}
        type="text"
        placeholder="이름을 입력하세요"
        value={yourName}
        onChange={onChangeName}
      />
      <input
        type="text"
        placeholder="닉네임을 입력하세요"
        value={yourNickName}
        onChange={onChangeNick}
      />
      <button onClick={onErase}>초기화</button>
      <div>
        <h1>이름: {yourName}</h1>
        <h1>닉네임: {yourNickName}</h1>
      </div>
      <input ref={fileUpload} type="file" style={{ display: "none" }} />
      <button onClick={handleUpload}>파일 업로드</button>
    </>
  );
};
export default Info;
