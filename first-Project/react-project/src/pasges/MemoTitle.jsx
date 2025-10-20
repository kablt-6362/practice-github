import React from "react";
import { useSelector } from "react-redux";

export default function MemoTitle() {
  const memotitle = useSelector((state) => state.auth.memotitle);
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">메모 목록</h1>
      {memotitle.length > 0 ? (
        <ul className="space-y-4">
          {memotitle.map((ele, index) => {
            return (
              <li
                key={index}
                className="p-4 border rounded-lg shadow-sm bg-gray-50"
              >
                {ele.content}
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
