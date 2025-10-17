import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PATHS from "../Path/paths";

export default function MemoCreat() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      alert("로그인 후 사용해 주세요.");
      navigate(PATHS.LOGIN);
    }
  }, []); // []안에 token을 넣을 필요가 없다. 다른곳 에서 메모생성으로 올때만 실행하면 비로그인을 감지할수가 있다
  // []안에 token을 넣으면 token값이 변할때마다 해당 useEffect가 발동하므로 수정전과 같이 usenavigate가 발동하는 현상이 일어난다

  return <div>MemoCreat</div>;
}
