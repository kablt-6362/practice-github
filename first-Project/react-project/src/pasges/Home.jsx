import { Link } from "react-router-dom";
import PATHS from "../Path/paths";

export default function Home() {
  const ptag =
    "자연어로 할 일을 입력하면 AI가 자동으로 구조화된 메모로 변환해주는 지능형메모 관리 서비스입니다.";

  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-md">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">Memo AI</h1>
        <h2 className="text-2xl text-gray-600 mb-4">지능형 메모 관리</h2>
        <p className="max-w-2xl mx-auto text-gray-500">{ptag}</p>
        <div className="flex gap-4 justify-center mt-6">
          <Link
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
            to={PATHS.MEMOCREAT}
          >
            메모 작성하기
          </Link>
          <Link
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors text-lg"
            to={PATHS.MEMOTITLE}
          >
            메모 목록 보기
          </Link>
        </div>
      </header>
      <section id="body" className="my-12 p-8 bg-gray-50 rounded-lg">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">주요 기능 설명</h3>
        <p className="text-gray-600">AI를 통해 당신의 생각을 정리하고, 중요한 일을 잊지 않도록 도와줍니다.</p>
      </section>
      <footer id="footer" className="p-8 bg-gray-800 text-white rounded-lg">
        <h3 className="text-3xl font-bold mb-4">사용 방법</h3>
        <p>메모 작성하기 버튼을 눌러 생각을 입력해보세요. AI가 나머지를 처리해줄 것입니다.</p>
      </footer>
    </div>
  );
}
