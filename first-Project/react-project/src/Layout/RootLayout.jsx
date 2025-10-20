import { Link, Outlet } from "react-router-dom";
import PATHS from "../Path/paths";
import { useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearMemoTitle } from "../store/authSlice";

export default function RootLayout() {
  const token = useSelector((state) => state.auth.token);
  const dispath = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispath(logout());
    alert("로그아웃 되었습니다.메인 페이지로 이동합니다");
    navigate(PATHS.INDEX);
  }
  function handleClearTitle() {
    dispath(clearMemoTitle());
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Link
              to={PATHS.INDEX}
              className="text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              Memo AI
            </Link>
            <nav className="flex gap-4">
              <Link
                to={PATHS.INDEX}
                className="text-gray-600 hover:text-gray-900"
              >
                홈으로
              </Link>
              <Link
                to={PATHS.MEMOCREAT}
                className="text-gray-600 hover:text-gray-900"
              >
                메모 작성
              </Link>
              <Link
                to={PATHS.MEMOTITLE}
                className="text-gray-600 hover:text-gray-900"
              >
                메모 목록
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            {token !== null ? (
              <div className="flex gap-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                  onClick={handleClearTitle}
                >
                  목록 초기화
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <>
                <Link
                  to={PATHS.LOGIN}
                  className="text-gray-600 hover:text-gray-900"
                >
                  로그인
                </Link>
                <Link
                  to={PATHS.SIGNUP}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  회원 가입
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
