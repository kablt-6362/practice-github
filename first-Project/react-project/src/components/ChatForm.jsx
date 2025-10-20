import React from "react";

// 사용자 프롬포트를 작성하는 컴포넌트
// 사용자 입력 프롬포트를 매개변수로 받는다
export default function ChatForm({ prompt, setprompt, isloading, onSubmit }) {
  return (
    <form
      action="
      "
      onSubmit={onSubmit}
      className="flex"
    >
      <input
        type="text"
        value={prompt}
        onChange={(e) => {
          setprompt(e.target.value);
        }}
        placeholder={
          isloading ? "메모를 작성 중입니다" : "메세지를 입력해주세요"
        }
        disabled={isloading}
      />
      <input type="submit" value="전송" />
    </form>
  );
}
