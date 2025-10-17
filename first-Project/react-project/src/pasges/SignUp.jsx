import { Link } from "react-router-dom";
import PATHS from "../Path/paths";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp, resetSignupSuccess } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function SingUp() {
  // 이메일,비밀번호,비밀번호확인 상태 관리
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passCheck, setPassCheck] = useState("");

  const navigate = useNavigate();
  const dispath = useDispatch();
  const isSignup = useSelector((state) => state.auth.isSignupSuccess);

  //form tag onsubmit에 사용할 핸들러 함수
  function handlerSubmit(e) {
    e.preventDefault();
    if (password !== passCheck) {
      alert("비밀번호와 비밀번호 확인이 다릅니다");
      return;
    }
    dispath(signUp({ email, password }));
  }

  useEffect(() => {
    if (isSignup) {
      alert("회원가입성공-메일함 열어서 링크 꼭 누르자");
      dispath(resetSignupSuccess());
      navigate(PATHS.LOGIN);
    }
  }, [isSignup, dispath]);

  return (
    <div>
      <div>
        <p>회원가입</p>
        <p>새 계정을 만들어보세요</p>
      </div>
      <div className="flex flex-col  gap-2">
        <form
          onSubmit={(e) => {
            handlerSubmit(e);
          }}
        >
          <input
            className="border-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="이메일 주소"
          />
          <input
            className="border-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="비밀번호"
          />
          <input
            className="border-2"
            onChange={(e) => {
              setPassCheck(e.target.value);
            }}
            type="password"
            placeholder="비밀번호 확인"
          />
          <input className="border-2" type="submit" value="회원가입 하기" />
        </form>
        <Link to={PATHS.LOGIN}>로그인</Link>
        <Link to={PATHS.INDEX}>처음으로</Link>
      </div>
    </div>
  );
}
