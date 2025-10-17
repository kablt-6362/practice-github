import { Link, Outlet } from "react-router-dom";
import PATHS from "../Path/paths";

export default function RootLayout() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="">
          <Link to={PATHS.INDEX}>홈으로</Link>
          <Link to={PATHS.MEMOCREAT}>메모 작성</Link>
          <Link to={PATHS.MEMOTITLE}>메모 목록</Link>
        </div>
        <div className="">
          <Link to={PATHS.LOGIN}>로그인</Link>
          <Link to={PATHS.SIGNUP}>회원 가입</Link>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
