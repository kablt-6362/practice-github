import { Link, useNavigate } from "react-router-dom";
import PATHS from "../Path/paths";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigata = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispath(login({ email: email, password: password }));
  }

  useEffect(() => {
    if (token) {
      alert("로그인에 성공하였습니다");
      navigata(PATHS.MEMOCREAT);
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <p className="text-3xl font-bold text-gray-800">로그인</p>
          <p className="text-gray-500 mt-2">계정에 로그인하세요</p>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            handleSubmit(e);
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
            className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
            type="submit"
            value="로그인 하기"
          />
        </form>
        <div className="mt-6 text-center flex flex-col gap-2">
          <Link to={PATHS.SIGNUP} className="text-blue-500 hover:underline">
            회원가입
          </Link>
          <Link to={PATHS.INDEX} className="text-gray-500 hover:underline">
            처음으로
          </Link>
        </div>
      </div>
    </div>
  );
}
