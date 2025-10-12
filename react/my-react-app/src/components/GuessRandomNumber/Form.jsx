import React from "react";
import { useState } from "react";

export default function Form({ compareNumber, isCorrect }) {
  // 사용자 입력 숫자 상태 관리
  const [userGuess, setUserGuess] = useState("");

  // 사용자의 제출 이벤트를 핸들링하는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 이벤트 실행(페이지 새로고침) 방지

    // Container에서 받은 숫자 비교 함수를 사용자 입력 숫자를 인자로 전달하며 실행
    compareNumber(userGuess);

    // 제출 후 입력 필드 초기화 (선택 사항)
    setUserGuess("");
  };
  // 입력 이벤트 핸들러
  const handleInputChange = (e) => {
    // 1~100 사이의 숫자만 허용하는 유효성 검사 (옵션)
    const value = e.target.value;
    if (
      value === "" ||
      (parseInt(value, 10) >= 1 && parseInt(value, 10) <= 100)
    ) {
      setUserGuess(value);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={userGuess}
          onChange={handleInputChange}
          placeholder={isCorrect ? "게임 종료" : "1 ~ 100 입력"}
          min="1"
          max="100"
          required // 필수 입력
          disabled={isCorrect} // 정답이면 입력 비활성화
        />
        <button
          type="submit"
          disabled={isCorrect || userGuess === ""} // 정답이거나 입력값이 없으면 버튼 비활성화
        >
          {isCorrect ? "정답 완료!" : "추측"}
        </button>
      </form>
    </div>
  );
}
