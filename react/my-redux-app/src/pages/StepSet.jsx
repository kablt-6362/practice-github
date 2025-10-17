import React from "react";
import { useDispatch } from "react-redux";
import { stepSet } from "../store/counterSlice";

export default function StepSet() {
  const dispath = useDispatch();
  function handleSetStep(step) {
    dispath(stepSet(step));
  }
  return (
    <div>
      <div className="mb-4">
        <div>현재 단위: {/* 전역 상태 step 불러와서 표시 */}</div>
      </div>
      <div className="flex gap-2">
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => handleSetStep(1)}
        >
          단위 1
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => handleSetStep(5)}
        >
          단위 5
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => handleSetStep(10)}
        >
          단위 10
        </button>
      </div>
    </div>
  );
}
