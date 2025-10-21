// src/pages/MemoAll.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMemoCompletion } from "../store/authSlice";

export default function MemoAll() {
  const memotitle = useSelector((state) => state.auth.memotitle);
  const dispatch = useDispatch();
  const handleToggleCompletion = (id) => {
    dispatch(toggleMemoCompletion(id));
  };

  // ⭐️ 필터링 로직: 모든 메모 반환
  const filteredMemos = memotitle;

  if (filteredMemos.length === 0) {
    return <p className="text-gray-500">저장된 메모가 없습니다.</p>;
  }

  return (
    <ul className="space-y-4">
      {filteredMemos.map((ele) => (
        <li
          key={ele.id}
          className="p-4 border rounded-lg shadow-sm bg-gray-50 flex items-center"
        >
          {/* ⭐️ 체크박스 표시: (전체 목록이므로 표시) */}
          <input
            type="checkbox"
            checked={ele.isCompleted}
            onChange={() => handleToggleCompletion(ele.id)}
            className="mr-4 h-6 w-6"
          />
          <span className={ele.isCompleted ? "line-through text-gray-500" : ""}>
            할 일: {ele.content} 마감 기한 : {ele.dueDate} 우선 순위:{" "}
            {ele.priority} 카테고리 : {ele.category}
          </span>
        </li>
      ))}
    </ul>
  );
}
