import React from "react";
import { useState } from "react";

// components/Calculator/Calculator.jsx
export default function Calculator() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [result, setResult] = useState(0);

  function handleChange(event) {
    const target = event.target;
    const { name, value } = target;
    if (name === "x") {
      const num = value;
      setX(num);
    } else if (name === "y") {
      const num = value;
      setY(num);
    }
  }
  function add() {
    console.log("x + y");
    // 상태 업데이트 로직
    const newResult = Number(x) + Number(y);
    setResult(newResult);
  }

  function subtract() {
    console.log("x - y");
    // 상태 업데이트 로직
    const newResult = Number(x) - Number(y);
    setResult(newResult);
  }

  function multiply() {
    console.log("x * y");
    // 상태 업데이트 로직
    const newResult = Number(x) * Number(y);
    setResult(newResult);
  }

  function divide() {
    console.log("x / y");
    // 상태 업데이트 로직
    const newResult = Number(x) / Number(y);
    setResult(newResult);
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        결과 값 : {result}
      </h2>
      <div>
        <input
          type="number"
          name="x"
          className="w-full p-2 mb-3 border"
          placeholder="x"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          type="number"
          name="y"
          className="w-full p-2 mb-3 border"
          placeholder="y"
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            add();
          }}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          더하기 +
        </button>
        <button
          onClick={() => {
            subtract();
          }}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          빼기 -
        </button>
        <button
          onClick={() => {
            multiply();
          }}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          곱하기 *
        </button>
        <button
          onClick={() => {
            divide();
          }}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          나누기 /
        </button>
      </div>
    </div>
  );
}
