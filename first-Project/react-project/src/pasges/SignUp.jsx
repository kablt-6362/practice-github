import { Link } from "react-router-dom";
import PATHS from "../Path/paths";

export default function SingUp() {
  return (
    <div>
      <div>
        <p>회원가입</p>
        <p>새 계정을 만들어보세요</p>
      </div>
      <div className="flex flex-col  gap-2">
        <input className="border-2" type="email" placeholder="이메일 주소" />
        <input className="border-2" type="password" placeholder="비밀번호" />
        <input className="border-2" type="number" placeholder="비밀번호 확인" />
        <input className="border-2" type="submit" value="회원가입 하기" />
        <Link to={PATHS.LOGIN}>로그인</Link>
        <Link to={PATHS.INDEX}>처음으로</Link>
      </div>
    </div>
  );
}
