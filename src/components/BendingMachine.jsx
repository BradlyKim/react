import React, { useState } from "react";

const BendingMachine = () => {
  const [nowCoin, setNowCoin] = useState(0);
  const resetCoin = () => setNowCoin(0);
  const coins = [100, 500, 1000, 5000, 10000];
  const insertCoin = (coin) => setNowCoin((prev) => prev + coin);
  const [cans, setCans] = useState([
    {
      id: 1,
      name: "물",
      price: "5000",
    },
    {
      id: 2,
      name: "콜라",
      price: "1000",
    },
    {
      id: 3,
      name: "사이다",
      price: "2000",
    },
    {
      id: 4,
      name: "커피",
      price: "3000",
    },
  ]);

  const buyCan = (price) => {
    if (!window.confirm("구매하시겠습니까?")) return;
    if (nowCoin < price) {
      alert("돈이 부족합니다.");
      return;
    }

    setNowCoin(nowCoin - price);
  };

  const cansDelete = (id) => {
    const newCans = cans.filter((cans) => cans.id !== id);
    setCans(newCans);
  };

  return (
    <>
      <div>현재코인: {nowCoin}원</div>
      <button onClick={resetCoin}>거스름돈 반환</button>

      <ul>
        {coins.map((coin) => (
          <li key={coin}>
            <button onClick={() => insertCoin(coin)}>{coin}원</button>
          </li>
        ))}
      </ul>

      <ul>
        {cans.map(({ id, name, price }) => (
          <li key={id} onDoubleClick={() => buyCan(price)}>
            {name} : {price}원{" "}
            <button onClick={() => cansDelete(id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BendingMachine;
