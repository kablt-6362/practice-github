import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMemoCompletion } from "../store/authSlice";

export default function MemoTitle() {
  const memotitle = useSelector((state) => state.auth.memotitle);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  const handleToggleCompletion = (id) => {
    dispatch(toggleMemoCompletion(id));
  };

  const filteredMemos = memotitle.filter((memo) => {
    if (filter === "incomplete") {
      return !memo.isCompleted;
    }
    if (filter === "completed") {
      return memo.isCompleted;
    }
    return true;
  });

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">메모 목록</h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          전체
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className={`px-4 py-2 rounded-lg ${
            filter === "incomplete"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          미완료
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-lg ${
            filter === "completed"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          완료
        </button>
      </div>
      {filteredMemos.length > 0 && token !== null ? (
        <ul className="space-y-4">
          {filteredMemos.map((ele) => (
            <li
              key={ele.id}
              className="p-4 border rounded-lg shadow-sm bg-gray-50 flex items-center"
            >
              {(filter === "incomplete" || filter === "all") && (
                <input
                  type="checkbox"
                  checked={ele.isCompleted}
                  onChange={() => handleToggleCompletion(ele.id)}
                  className="mr-4 h-6 w-6"
                />
              )}
              <span
                className={ele.isCompleted ? "line-through text-gray-500" : ""}
              >
                할 일: {ele.content} 마감 기한 : {ele.dueDate} 우선 순위:{" "}
                {ele.priority}
                카테고리 : {ele.category}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">저장된 메모가 없습니다.</p>
      )}
    </div>
  );
}
