import React from "react";

export default function Form() {
  return (
    <div >
      <p>회원가입</p>
      <p>이메일</p>
      <input type="text" name="email" />
      <p>비밀번호</p>
      <input type="Number" name="password"/>
      <p>비밀번호확인</p>
      <input type="Number" name="passwordCheck"/>
      <p>레벨</p>
      {/* 체크 박스 */}
      <p>회원가입</p>
    </div>
  );
}
