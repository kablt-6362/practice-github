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
  type: "object",
  properties: {
    content: {
      type: "string",
      description: "해야하는 일(본문)",
    },
    dueDate: {
      type: "string",
      description: "할 일 마감 기한(YYYY/MM/DD/HH)",
    },
    priority: {
      type: "string",
      description: "우선 순위 허용 값은 '높음','중간','낮음 '중 하나",
    },
    category: {
      type: "string",
      description: "메모 내용의 종류(업무,가사,운동,약속 등)",
    },
  },
  required: ["content", "dueDate", "priority", "category"],
  additionalProperties: false,
};

//ai 대답 기능 설정
const systemInstruction = [
  `현재 날짜와 시간: ${new Date().toLocaleString("ko-KR", { hour12: false })}`,
  "당신은 사용자의 요청을 분석하여 '한 장의 메모' 형태로 텍스트를 정리하는 전문 비서입니다.",
  "JSON형식으로 응답합니다",
  // ⭐️ 원하는 출력 형식을 그대로 복사하여 모델에게 보여줍니다.
  "할일 : [사용자가 요청한 내용을 요약하여 작성]",
  "시간 : [현재 날짜를 기준으로 계산된 YYYY/MM/DD 시간 형태. 시간이 없으면 빈칸]",
  "중요도: [요청의 중요도를 고려하여 '높음', '보통', '낮음' 중 하나]",
  "카테고리: [내용의 종류 (예: 건강, 업무, 가사, 약속 등)]",

  // ⭐️ 추가 규칙
  "날짜와 시간이 상대적으로 주어졌다면 반드시 현재 날짜/시간을 기준으로 계산하여 구체적인 날짜로 변환합니다. (예: '내일 오후5시'를 'YYYY/MM/DD 17:00' 형태로)",
  "할 일이 아닌 단순한 인사나 일반적인 대화일 경우, '메모할 내용이 명확하지 않습니다.'라고만 응답하고 나머지 항목은 생략합니다.",
];

// ai 응답시 응답 기준설정 객체
const config = {
  responseMimeType: "application/json",
  responseJsonSchema: responseSchema,
  systemInstruction: systemInstruction,
};
export { ai, chat, config };
