// src/pages/MemoIncomplete.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
// toggleMemoCompletion과 deleteMemo 액션을 모두 임포트합니다.
import { toggleMemoCompletion, deleteMemo } from "../store/authSlice";

export default function MemoIncomplete() {
  const memotitle = useSelector((state) => state.auth.memotitle);
  const dispatch = useDispatch();

  // 토글 기능: 체크박스 클릭 시 사용
  const handleToggleCompletion = (id) => {
    dispatch(toggleMemoCompletion(id));
  };

  // 삭제 기능: 삭제 버튼 클릭 시 사용
  const handleDeleteMemo = (id) => {
    if (window.confirm("정말로 이 메모를 삭제하시겠습니까?")) {
      dispatch(deleteMemo(id));
    }
  };

  // ⭐️ 필터링 로직: 미완료(isCompleted: false) 메모만 반환
  const filteredMemos = memotitle.filter((memo) => !memo.isCompleted);

  if (filteredMemos.length === 0) {
    return <p className="text-gray-500">미완료된 메모가 없습니다.</p>;
  }

  return (
    <ul className="space-y-4">
      {filteredMemos.map((ele) => (
        <li
          key={ele.id}
          className="p-4 border rounded-lg shadow-sm bg-gray-50 flex items-center justify-between"
        >
          <div className="flex items-center">
            {/* ⭐️ 체크박스: handleToggleCompletion 함수를 사용하여 상태 토글 */}
            <input
              type="checkbox"
              checked={ele.isCompleted}
              onChange={() => handleToggleCompletion(ele.id)}
              className="mr-4 h-6 w-6"
            />
            <span
              className={ele.isCompleted ? "line-through text-gray-500" : ""}
            >
              할 일: {ele.content} 마감 기한 : {ele.dueDate} 우선 순위:{" "}
              {ele.priority} 카테고리 : {ele.category}
            </span>
          </div>

          {/* ⭐️ 삭제 버튼 */}
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
