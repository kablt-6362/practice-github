import React from "react";

// 사용자 프롬포트를 작성하는 컴포넌트
// 사용자 입력 프롬포트를 매개변수로 받는다
export default function ChatForm({ prompt, setprompt, isloading, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex items-center p-4 bg-white border-t"
    >
      <input
        type="text"
        value={prompt}
        onChange={(e) => {
          setprompt(e.target.value);
        }}
        placeholder={
          isloading ? "메모를 작성 중입니다..." : "메세지를 입력해주세요"
        }
        disabled={isloading}
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
      />
      <input
        type="submit"
        value="전송"
        disabled={isloading}
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer"
      />
    </form>
  );
}
