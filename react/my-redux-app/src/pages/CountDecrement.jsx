import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countDecrement } from "../store/counterSlice";

export default function CountDecrement() {
  const count = useSelector((state) => state.counter.step);
  const dispath = useDispatch();

  function handleDecrement() {
    dispath(countDecrement());
  }

  return (
    <div>
      <button
        className="border-2 p-2 cursor-pointer"
        onClick={() => handleDecrement()}
      >
        전역 상태 count 감소
      </button>
      <div>현재 단위: {count}</div>
    </div>
  );
}
