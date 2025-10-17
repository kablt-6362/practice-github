import React from "react";
import { countIncrement } from "../store/counterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function CountIncrements() {
  const dispath = useDispatch();
  const counter = useSelector((state) => state.counter.step);
  function handleIncrement() {
    dispath(countIncrement());
  }
  return (
    <div>
      {" "}
      <button
        className="border-2 p-2 cursor-pointer"
        onClick={() => handleIncrement()}
      >
        전역 상태 count 증가
      </button>
      <div>현재 단위: {counter}</div>
    </div>
  );
}
