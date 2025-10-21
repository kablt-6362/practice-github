import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAiResponse } from "../store/authSlice";

// chatMessage는 사용자 입력값orai응답 값을 받아서 역할에 따라 내용을 반환한다
// 반환된 내용안 messagelist에 작성된다
export default function ChatMessage({ message, canclemessage }) {
  const isUser = message.role === "user";
  const [parsedContent, setParsedContent] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();

  // ⭐️ handleAddResponse 함수 완성
  function handleAddResponse() {
    if (!parsedContent) {
      console.error("파싱된 내용이 없어 메모를 추가할 수 없습니다.");
      return;
    }
    if (isAdd === true) {
      return;
    }

    // 1. ⭐️ parseContent의 데이터를 사용하여 새 객체 생성 (요구하신 예시를 따름)
    const newMemoObject = {
      content: parsedContent.content,
      dueDate: parsedContent.dueDate,
      priority: parsedContent.priority,
      category: parsedContent.category,
      isCompleted: parsedContent.isCompleted,
      // (주의: authSlice의 addAiResponse 리듀서가 이 전체 객체를 받도록 설정되어 있어야 함)
    };
    dispatch(addAiResponse(newMemoObject));
    setIsAdd(true);
    // 사용자에게 메모가 추가되었음을 알리는 피드백 (선택 사항)
    alert("메모가 목록에 추가되었습니다!");
  }

  function handleCancle() {
    if (isAdd === true) {
      console.log("이미추가된 메모입니다");
      return;
    }
    canclemessage;
  }

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
              <button
                onClick={() => {
                  handleAddResponse();
                }}
              >
                메모 추가
              </button>
              <button
                onClick={() => {
                  handleCancle();
                }}
              >
                취소
              </button>
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
