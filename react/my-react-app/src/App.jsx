import React from "react";
import StringState from "./components/State/StringState";
import NumberState from "./components/State/NumberState";
import ObjectState from "./components/State/ObjectState";

export default function App() {
  return (
    <div>
      <StringState></StringState>
      <NumberState></NumberState>
      <ObjectState></ObjectState>
    </div>
  );
}
