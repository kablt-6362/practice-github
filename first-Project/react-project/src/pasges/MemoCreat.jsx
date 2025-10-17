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
  }, []);

  return <div>MemoCreat</div>;
}
