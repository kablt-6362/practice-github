import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// chatMessage는 사용자 입력값orai응답 값을 받아서 역할에 따라 내용을 반환한다
// 반환된 내용안 messagelist에 작성된다
export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`w-full flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-2xl p-3 my-2 rounded-lg ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {isUser ? (
          <div>{message.content}</div>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
