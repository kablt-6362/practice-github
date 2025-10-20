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
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <p className="text-3xl font-bold text-gray-800">회원가입</p>
          <p className="text-gray-500 mt-2">새 계정을 만들어보세요</p>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            handlerSubmit(e);
          }}
        >
          <input
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="이메일 주소"
          />
          <input
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="비밀번호"
          />
          <input
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setPassCheck(e.target.value);
            }}
            type="password"
            placeholder="비밀번호 확인"
          />
          <input
            className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
            type="submit"
            value="회원가입 하기"
          />
        </form>
        <div className="mt-6 text-center flex flex-col gap-2">
          <Link to={PATHS.LOGIN} className="text-blue-500 hover:underline">
            로그인
          </Link>
          <Link to={PATHS.INDEX} className="text-gray-500 hover:underline">
            처음으로
          </Link>
        </div>
      </div>
    </div>
  );
}
