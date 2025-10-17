import { Link } from "react-router-dom";
import PATHS from "../Path/paths";

export default function Login() {
  return (
    <div>
      <div>
        <p>로그인</p>
        <p>계정에 로그인하세요</p>
      </div>
      <div className="flex flex-col  gap-2">
        <input className="border-2" type="email" />
        <input className="border-2" type="password" />
        <input className="border-2" type="submit" value="로그인 하기" />
        <Link to={PATHS.SIGNUP}>회원가입</Link>
        <Link to={PATHS.INDEX}>처음으로</Link>
      </div>
    </div>
  );
}
