// ai 설정
// gemini ai 임포트
import { GoogleGenAI } from "@google/genai";
// ai 사용을 위한 api key 발급 후 key 값 입력을 위한 변수
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// GoogleGEenAI 객체 생성
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

//ai chat 객체 생성
const chat = ai.chats.create({
  model: "gemini-2.5-flash",
});

//응답 스키마 작성
const responseSchema = {
  type: "objecet",
  properties: {
    content: {
      type: "string",
      description: "해야하는 일(본문)",
    },
    dueDate: {
      type: "string",
      description: "할 일 마감 기한(YYYY,MM,DD)",
    },
    priority: {
      type: "string",
      description: "우선 순위(중요,보통,낮음)",
    },
    category: {
      type: "string",
      description: "메모 내용의 종류(업무,가사,운동,약속 등)",
    },
  },
  required: ["content", "dueData", "priority", "category"],
  additionalProperties: false,
};

//ai 대답 기능 설정
const systemInstruction = [
  `오늘 날짜: ${new Date().toISOString().split("T")[0]}`,
  "당신은 메모 관리사 입니다. 해야할 일과 시간이 정해진 내용을 정리해줍니다",
  "JSON형식으로 응답합니다.",
  "응답 할 때에는 할 일 내용, 우선순위, 카테고리(운동,일,약속 등), 약속 시간or마감 기한 을 포함한 객체를 생성합니다",
  "우선순위는 중요도를 고려하여 (낮음,중간,높음)으로 설정한다",
  "할 일이 아닌 인사,일반적인 대화는 무시하고 '메모 할 내용을 남겨주세요'라고 응답합니다",
];

// ai 응답시 응답 기준설정 객체
const config = {
  responseMimeType: "application/json",
  responseJsonSchema: responseSchema,
  systemInstruction: systemInstruction,
};
export { ai, chat, config };
