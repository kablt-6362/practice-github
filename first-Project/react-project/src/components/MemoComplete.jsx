// src/pages/MemoComplete.jsx

// ... (import 및 함수 정의는 MemoAll.jsx와 동일)
import { useSelector, useDispatch } from "react-redux";

export default function MemoComplete() {
  const memotitle = useSelector((state) => state.auth.memotitle);

  // handleToggleCompletion 정의는 유지 (완료 상태를 다시 미완료로 돌릴 수 있도록)

  // ⭐️ 필터링 로직: 완료(isCompleted: true) 메모만 반환
  const filteredMemos = memotitle.filter((memo) => memo.isCompleted);

  if (filteredMemos.length === 0) {
    return <p className="text-gray-500">완료된 메모가 없습니다.</p>;
  }

  return (
    <ul className="space-y-4">
      {filteredMemos.map((ele) => (
        <li
          key={ele.id}
          className="p-4 border rounded-lg shadow-sm bg-gray-50 flex items-center"
        >
          {/* ⭐️ 체크박스 표시: (완료 목록에서는 표시하지 않음 - 사용자의 요구사항 유지) */}
          <span className={ele.isCompleted ? "line-through text-gray-500" : ""}>
            할 일: {ele.content} 마감 기한 : {ele.dueDate} 우선 순위:{" "}
            {ele.priority} 카테고리 : {ele.category}
          </span>
        </li>
      ))}
    </ul>
  );
}
