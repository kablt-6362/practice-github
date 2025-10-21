import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

// chatMessage는 사용자 입력값orai응답 값을 받아서 역할에 따라 내용을 반환한다
// 반환된 내용안 messagelist에 작성된다
export default function ChatMessage({ message }) {
  const isUser = message.role === "user";
  const [parsedContent, setParsedContent] = useState(null);

  useEffect(() => {
    if (isUser) {
      setParsedContent(null);
      return;
    }

    try {
      const parsed = JSON.parse(message.content);
      setParsedContent(parsed);
    } catch (e) {
      // It's not a valid JSON, so treat as plain text
      setParsedContent(null);
    }
  }, [message.content, isUser]);

  return (
    <div className={`w-full flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-2xl p-3 my-2 rounded-lg text-left ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {isUser ? (
          // 사용자 메시지는 그대로 표시
          <div>{message.content}</div>
        ) : parsedContent ? (
          // AI 메시지가 JSON일 경우 파싱된 내용을 표시
          <>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {`할 일: ${parsedContent.content}\n
마감 기한: ${parsedContent.dueDate}\n
우선 순위 : ${parsedContent.priority}\n
메모 내용 종류 : ${parsedContent.category}\n
완료 여부: ${parsedContent.isCompleted}`}
            </ReactMarkdown>
            <div>
              <button>메모 추가</button>
              <button>취소</button>
            </div>
          </>
        ) : (
          // AI 메시지가 일반 텍스트일 경우 그대로 표시
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
