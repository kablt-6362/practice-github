import { useState, useEffect } from "react";
import findMinOperations from "./../../utils/dfs";

export default function Container() {
  const [number, setNumber] = useState(1); // 현재 숫자
  const [targetNumber, setTargetNumber] = useState(-1); // 목표 숫자
  const [minCount, setMinCount] = useState(-1); // 최소 연산 횟수
  const [count, setCount] = useState(0); // 연산 시도 횟수
  const [gameStatus, setGameStatus] = useState("playing"); // 게임 상태

  // 목표 숫자(2~100) 랜덤 생성
  useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 99) + 2); // 2~100 범위
    setGameStatus("playing");
  }, []);

  // 목표 숫자를 위한 최소 연산 횟수 계산
  useEffect(() => {
    setMinCount(findMinOperations(targetNumber));
  }, [targetNumber]);

  // 게임 상태 체크 및 게임 종료 처리
  useEffect(() => {
    // 성공
    if (number === targetNumber && count === minCount) {
      alert("성공");
      setGameStatus("stop");
    }
    // 시도 횟수 초과
    if (count > minCount) {
      alert("시도 횟수 초과");
      setGameStatus("stop");
    }
  }, [number, targetNumber, count, minCount]);

  return <div></div>;
}
