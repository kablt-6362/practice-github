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
    <div>
      <div>
        <p>로그인</p>
        <p>계정에 로그인하세요</p>
      </div>
      <div className="flex flex-col  gap-2">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            className="border-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
          <input
            className="border-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
          <input className="border-2" type="submit" value="로그인 하기" />
        </form>
        <Link to={PATHS.SIGNUP}>회원가입</Link>
        <Link to={PATHS.INDEX}>처음으로</Link>
      </div>
    </div>
  );
}
