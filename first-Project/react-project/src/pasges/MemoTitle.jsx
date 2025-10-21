import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearMemoTitle } from "../store/authSlice";

export default function MemoTitle() {
  const memotitle = useSelector((state) => state.auth.memotitle);
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">메모 목록</h1>
      {memotitle.length > 0 && token !== null ? (
        <ul className="space-y-4">
          {memotitle.map((ele, index) => {
            console.log(ele);
            return (
              <li
                key={index}
                className="p-4 border rounded-lg shadow-sm bg-gray-50"
              >
                할 일: {ele.content} 마감 기한 : {ele.dueDate} 우선 순위:
                {ele.priority}
                카테고리 : {ele.category} 완료여부 : {ele.isCompleted}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-500">저장된 메모가 없습니다.</p>
      )}
    </div>
  );
}
