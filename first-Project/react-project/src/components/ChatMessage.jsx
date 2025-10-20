import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// chatMessage는 사용자 입력값orai응답 값을 받아서 역할에 따라 내용을 반환한다
// 반환된 내용안 messagelist에 작성된다
export default function ChatMessage({ message }) {
  const isUser = message.role === "user";
  const isAi = message.role === "ai";

  return (
    <div className={`${isUser ? "justify-end" : "justify-start"}`}>
      {isAi ? (
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message.content}
          </ReactMarkdown>
        </div>
      ) : (
        <div>{message.content}</div>
      )}
    </div>
  );
}
