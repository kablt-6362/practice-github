// src/pages/MemoAll.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMemoCompletion, deleteMemo } from "../store/authSlice";

export default function MemoAll() {
  const memotitle = useSelector((state) => state.auth.memotitle);
  const dispatch = useDispatch();

  // ⭐️ 필터링 로직: 모든 메모 반환
  const filteredMemos = memotitle;

  if (filteredMemos.length === 0) {
    return <p className="text-gray-500">저장된 메모가 없습니다.</p>;
  }
  // ⭐️ 새 핸들러 함수: 메모 삭제
  const handleDeleteMemo = (id) => {
    // 실제 애플리케이션에서는 사용자에게 확인 메시지를 표시하는 것이 좋습니다.
    if (window.confirm("정말로 이 메모를 삭제하시겠습니까?")) {
      dispatch(deleteMemo(id));
    }
  };

  return (
    <ul className="space-y-4">
      {filteredMemos.map((ele) => (
        <li
          key={ele.id}
          className="p-4 border rounded-lg shadow-sm bg-gray-50 flex items-center justify-between"
        >
          {/* 메모 내용 영역 */}
          <div className="flex items-center">
            {/* ⭐️ 체크박스 (MemoAll/MemoIncomplete에만 해당) */}
            <input
              type="checkbox"
              checked={ele.isCompleted}
              onChange={() => dispatch(toggleMemoCompletion(ele.id))}
              className="mr-4 h-6 w-6"
            />
            <span
              className={ele.isCompleted ? "line-through text-gray-500" : ""}
            >
              할 일: {ele.content} 마감 기한 : {ele.dueDate} 우선 순위:{" "}
              {ele.priority} 카테고리 : {ele.category}
            </span>
          </div>

          {/* ⭐️ 삭제 버튼 추가 */}
          <button
            onClick={() => handleDeleteMemo(ele.id)}
            className="ml-4 px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition duration-150"
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
