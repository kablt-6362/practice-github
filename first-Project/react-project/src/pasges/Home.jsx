import { Link } from "react-router-dom";
import PATHS from "../Path/paths";

export default function Home() {
  const ptag =
    "자연어로 할 일을 입력하면 AI가 자동으로 구조화된 메모로 변환해주는 지능형메모 관리 서비스입니다.";

  return (
    <div>
      <div id="header">
        <h1>Memo AI</h1>
        <h2>지능형 메모 관리</h2>
        <p>{ptag}</p>
        <div className="flex gap-2 justify-center">
          <Link className="border-2 " to={PATHS.MEMOCREAT}>메모 작성하기</Link>
          <Link className="border-2 " to={PATHS.MEMOTITLE}>메모 목록 보기</Link>
        </div>
      </div>
      <div id="body">주요 기능 설명</div>
      <div id="footer">사용 방법</div>
    </div>
  );
}
