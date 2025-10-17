import React from "react";
import { useSelector } from "react-redux";

export default function CountView() {
  const counter = useSelector((state) => state.counter);
  const count = useSelector((state) => state.counter.count);
  return <div>전역 상태 count:{counter}</div>;
}
