import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  const name = "리엑트";
  const jal = "자알";
  const age = 0;
  // false, 0, "", null, undefined, NaN 모두 undefined 가능

  const style2 = {
    backgroundColor: "red",
    color: "gold",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      {age || <h1>undefined입니다.</h1>}
      {name === "리엑트" && <h1>리엑트입니다.</h1>}
      {name === "리엑트1" ? (
        <h1>리엑트입니다.</h1>
      ) : (
        <h1>리엑트가 아닙니다.</h1>
      )}
      <h1 className="react">{name} 안녕!</h1>
      <h2 style={style2}>{jal} 작동하니?</h2>
      <input type="file" />
      <input />
      <br />
      <MyComponent name="React" />
      <h1>CHILDREN</h1>
      <MyComponent name="Vue" />
      <MyComponent name="Angular" />
    </>
  );
}

export default App;
