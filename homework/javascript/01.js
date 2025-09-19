// TODO: 변수와 문자열
// myCampus 변수를 선언하고, 이곳의 캠퍼스 이름을 할당한다
// myCampus 변수를 출력한다
const myCampus = "성동캠퍼스";
console.log(myCampus);

/* 출력 결과
성동캠퍼스
*/

// TODO: 불리언 자료형
// isStudent 변수에 true를 할당하고, isWorking 변수에 false를 할당한다
// 두 변수를 각각 출력한다

const isStudent = true;
const isWorking = false;
console.log(isStudent);
console.log(isWorking);

/* 출력 결과
true
false
*/

// TODO: 문자열 연결
// firstName 변수에 "홍"을, lastName 변수에 "길동"을 할당한다
// 두 변수를 연결하여 fullName 변수에 저장하고 출력한다
const firstName = "홍";
const lastName = "길동";
const fullName = firstName + lastName;
console.log(fullName);

/* 출력 결과
홍길동
*/

// TODO: 숫자 변수와 연산
// age 변수에 25를 할당하고, 10년 후의 나이를 계산하여 futureAge 변수에 저장한다
// "10년 후 나이: [futureAge]" 형식으로 출력한다
let age = 25;
const futureAge = age + 10;
console.log("10년 후 나이: " + futureAge);
console.log(`10년 후 나이: ${futureAge}`);

/* 출력 결과
10년 후 나이: 35
*/

// TODO: 템플릿 리터럴
// subject 변수에 "JavaScript"를, score 변수에 95를 할당한다
// 템플릿 리터럴을 사용하여 "[subject] 점수: [score]점" 형식으로
let subject = "javaScript";
let score = 95;
console.log(`${subject} 점수: ${score}점`);

/* 출력 결과
JavaScript 점수: 95점
*/

// TODO: 비교 연산자
// num1 변수에 15를, num2 변수에 20을 할당한다
// num1이 num2보다 작은지 비교한 결과를 isSmaller 변수에 저장하고 출력한다
let num1 = 15;
let num2 = 20;
let isSmaller = num1 < num2;
console.log(isSmaller);

/* 출력 결과
true
*/

// TODO: typeof 연산자
// myString 변수에 "Hello"를, myNumber 변수에 42를, myBoolean 변수에 true를 할당한다
// 각 변수의 자료형을 typeof 연산자를 사용하여 출력한다
let myString = "Hello";
let myNumber = 42;
let myBoolean = true;
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);

/* 출력 결과
string
number
boolean
*/

// TODO: 나머지 연산자와 조건
// totalItems 변수에 17을 할당한다
// totalItems를 5로 나눈 나머지를 remainder 변수에 저장하고 출력한다
let totalItems = 17;
let remainder = totalItems % 5;
console.log(remainder);

/* 출력 결과
2
*/

// TODO: 논리 연산자
// hasLicense 변수에 true를, hasExperience 변수에 false를 할당한다
// 두 변수의 AND 연산과 OR 연산 결과를 각각 출력한다
let hasLicense = true;
let hasExperience = false;
console.log(hasLicense && hasExperience);
console.log(hasLicense || hasExperience);

/* 출력 결과
false
true
*/

// TODO: 변수 재할당과 계산
// price 변수를 100으로 선언하고 출력한다
// price에 20% 할인을 적용한 값을 다시 price에 할당하고 출력한다
// (20% 할인 = 원가 × 0.8)
let price = 100;
console.log(price);
price = price * 0.8;
console.log(price);
/* 출력 결과
100
80
*/

//gemini 추천 문제

// 두 과목의 시험 점수를 바탕으로 합격 여부를 판별하는 프로그램을 만들어 보세요.
// koreanScore 변수에 85를, mathScore 변수에 75를 할당하세요.
// koreanScore에 5점을 추가하고, mathScore에는 10점을 감점하세요. +=, -= 연산자를 사용하여 재할당하세요.
// 합격 기준은 두 과목 점수가 모두 80점 이상일 때입니다.
// isPassed 변수에 합격 여부(true / false)를 저장하고 출력하세요.
let koreanScore = 85;
let mathScore = 75;
koreanScore = 85 + 5;
mathScore = 75 - 10;
let isPassed = koreanScore > 80 && mathScore > 80;
console.log(isPassed); //false

// quantity 변수에 문자열 '50'을, unitPrice 변수에 숫자 1500을 할당하세요.
// totalPrice 변수를 선언하고, quantity와 unitPrice를 곱한 값을 할당하세요.
// totalPrice의 값과 자료형을 console.log()로 각각 출력하세요.
// 예상치 못한 결과가 나왔다면, quantity를 Number() 함수를 이용해 숫자로 명시적 형변환한 후 다시 계산하고 출력하세요.
let quantity = "50";
let unitPrice = 1500;
let totalPrice = quantity * unitPrice;
console.log(totalPrice); // 예상, 문자 50을 숫자로 변환후 자동 계산
console.log(typeof totalPrice);

// 개인 정보를 기반으로 요약 문장을 만드는 프로그램을 작성해 보세요.
// name 변수에 '김민준'을, birthYear 변수에 2000을 할당하세요.
// currentYear 변수에 2025를 할당하세요.
// age1 변수를 선언하고, currentYear에서 birthYear를 뺀 값을 할당하세요.
// 템플릿 리터럴을 사용하여 "[이름]님은 올해로 [나이]살입니다." 형식의 문장을 만들어 출력하세요.
let name = "김민준";
let birthYear = 2000;
let currentYear = 2025;
let age1 = currentYear - birthYear;
console.log(`${name}님은 올해로 ${age1}살입니다.`);
