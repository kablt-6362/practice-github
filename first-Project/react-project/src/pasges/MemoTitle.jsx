// src/pages/MemoTitle.jsx (최종 수정본)

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// ⭐️ PATHS 파일을 여기서도 import 해야 NavLink의 to 속성을 사용할 수 있습니다.
import PATHS from "../Path/paths";

export default function MemoTitle() {
  const token = useSelector((state) => state.auth.token);

  if (token === null) {
    return <p className="text-gray-500 p-8">로그인 후 메모를 확인해 주세요.</p>;
  }
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">메모 목록</h1>

      <div className="flex space-x-4 mb-6">
        {/* ⭐️ NavLink: PATHS 변수와 isActive를 사용하여 스타일링 */}
        <NavLink
          to={PATHS.MEMO_ALL}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`
          }
        >
          전체
        </NavLink>

        <NavLink
          to={PATHS.MEMO_INCOMPLETE}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg ${
              isActive
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`
          }
        >
          미완료
        </NavLink>

        <NavLink
          to={PATHS.MEMO_COMPLETE}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg ${
              isActive ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
            }`
          }
        >
          완료
        </NavLink>
      </div>

      {/* ⭐️ Outlet: 선택된 필터 컴포넌트 (MemoAll, MemoIncomplete, MemoComplete 중 하나)가 렌더링될 위치 */}
      <Outlet />
    </div>
  );
}
