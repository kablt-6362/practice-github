import React from "react";
import Form from "./Form";
import RandomNumber from "./RandomNumber";
import { useEffect, useState } from "react";

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
export default function Container() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(0);
  const [hintMessage, setHintMessage] = useState("힌트");
  const [isCorrect, setIsCorrect] = useState(false);

  // 숫자 비교 함수 (일반 함수로 정의)
  const compareNumber = (userGuess) => {
    // 이미 정답을 맞췄으면 추가 시도 방지
    if (isCorrect) {
      setHintMessage("이미 정답을 맞췄습니다! 새로고침 해주세요.");
      return;
    }

    setAttempts((prevAttempts) => {
      const newAttempts = prevAttempts + 1;

      const guess = parseInt(userGuess, 10);

      // 유효성 검사
      if (isNaN(guess) || guess < 1 || guess > 100) {
        setHintMessage("1에서 100 사이의 유효한 숫자를 입력해주세요.");
        return newAttempts - 1; // 시도 횟수 증가 취소
      }

      // 정답 / Up! / Down! 판단 및 상태 업데이트
      if (guess === randomNumber) {
        setIsCorrect(true);
        // newAttempts를 사용하여 시도 횟수 표시
        setHintMessage(`🎉 정답입니다! ${newAttempts}번 만에 맞추셨어요!`);
      } else if (guess < randomNumber) {
        setHintMessage("⬆️ Up! (더 높은 숫자를 입력하세요)");
      } else {
        setHintMessage("⬇️ Down! (더 낮은 숫자를 입력하세요)");
      }

      return newAttempts; // 새로운 시도 횟수 반환
    });
  };
  return (
    <div>
      <h1>숫자 맞추기 게임</h1>

      <RandomNumber randomNumber={randomNumber} isCorrect={isCorrect} />

      <p>
        시도 횟수: <span>{attempts}</span>
      </p>

      <p>힌트: {hintMessage}</p>

      {/* Form 컴포넌트에 Props 전달 */}
      <Form
        compareNumber={compareNumber} // 새로 생성된 함수 전달
        isCorrect={isCorrect}
      />
    </div>
  );
}
