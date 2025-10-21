import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PATHS from "../Path/paths";
import { addAiResponse } from "../store/authSlice";
import { useDispatch } from "react-redux";
import ChatForm from "../components/ChatForm";
import MessageList from "../components/MessageList";
import { ai } from "../utils/genai";
import { config } from "../utils/genai";

export default function MemoCreat() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isloading, setisLoading] = useState(false);
  const dispatch = useDispatch();

  //handle 함수
  async function handleSubmit(event) {
    event.preventDefault();
    if (isloading === true || prompt.trim() === "") {
      return;
    }
    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    setPrompt("");
    setisLoading(true);
    //ai응답 비동기함수
    await generateAIContent();
    setisLoading(false);
  }

  async function generateAIContent() {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: config,
      });
      setMessages((prev) => [...prev, { role: "ai", content: response.text }]);
      // 응답 내용을 저장하는 함수
    } catch (error) {
      return console.error(error);
    }
  }

  async function cancleMessage() {
    setMessages((prev) => [
      ...prev,
      { role: "ai", content: "취소되었습니다." },
    ]);
  }

  useEffect(() => {
    if (token === null) {
      alert("로그인 후 사용해 주세요.");
      navigate(PATHS.LOGIN);
    }
  }, []); // []안에 token을 넣을 필요가 없다. 다른곳 에서 메모생성으로 올때만 실행하면 비로그인을 감지할수가 있다
  // []안에 token을 넣으면 token값이 변할때마다 해당 useEffect가 발동하므로 수정전과 같이 usenavigate가 발동하는 현상이 일어난다

  return (
    <div className="h-[calc(100vh-150px)] flex flex-col bg-white rounded-lg shadow-md">
      {/* 메세지 리스트, chat폼, chat메세지 */}
      <MessageList message={messages} canclemessage={cancleMessage} />
      <ChatForm
        prompt={prompt}
        setprompt={setPrompt}
        isloading={isloading}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
