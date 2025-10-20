import React from "react";
import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

export default function MessageList({ message }) {
  const messageEndRef = useRef(null);

  // 메시지 배열이 추가될떄마다 스크롤의 위치를 최하단으로 함
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className="flex overflow-y-auto p-4">
      사용자 질문, ai응답 나타내는 컴포넌트
      {/* MessageList 는 chatMessage를 반환한다.
       */}
      <br />
      {message.map((message, index) => {
        return <ChatMessage key={index} message={message}></ChatMessage>;
      })}
      {/* 아래 div 기준 스크롤 위치 조정 */}
      <div ref={messageEndRef}></div>
    </div>
  );
}
