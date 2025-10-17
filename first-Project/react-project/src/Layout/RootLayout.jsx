import { Link, Outlet } from "react-router-dom";
import PATHS from "../Path/paths";
import { useSelector } from "react-redux";

export default function RootLayout() {
  const token = useSelector((state) => state.auth.token);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link to={PATHS.INDEX}>홈으로</Link>
          <Link to={PATHS.MEMOCREAT}>메모 작성</Link>
          <Link to={PATHS.MEMOTITLE}>메모 목록</Link>
        </div>
        <div className="flex gap-2">
          {token !== null ? (
            <button>로그아웃</button>
          ) : (
            <>
              <Link to={PATHS.LOGIN}>로그인</Link>
              <Link to={PATHS.SIGNUP}>회원 가입</Link>
            </>
          )}
          {/* <Link to={PATHS.LOGIN}>로그인</Link>
          <Link to={PATHS.SIGNUP}>회원 가입</Link> */}
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
