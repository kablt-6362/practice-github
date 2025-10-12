// RandomNumber.jsx
import React from "react";

// Container에서 랜덤 숫자와 정답 여부를 props로 받습니다.
export default function RandomNumber({ randomNumber, isCorrect }) {
  const style = {
    padding: "10px",
    margin: "10px 0",
    backgroundColor: isCorrect ? "#d4edda" : "#f8d7da",
    color: isCorrect ? "#155724" : "#721c24",
    border: isCorrect ? "1px solid #c3e6cb" : "1px solid #f5c6cb",
    borderRadius: "5px",
  };

  return (
    <div style={style}>
      {isCorrect ? (
        // 정답일 때: 랜덤 숫자 표시
        <h2>
          정답은: <span style={{ color: "green" }}>{randomNumber}</span>
        </h2>
      ) : (
        // 정답이 아닐 때: 숫자를 표시하지 않는 메세지
        <h2>정답을 맞춰보세요! ❓❓❓</h2>
      )}
    </div>
  );
}
