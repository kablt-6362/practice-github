function sumPositiveNumbers(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count += array[i];
    }
  }
  return count;
}
// 화살표 함수 정의 코드
const sumPositiveNumbersArrow = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count += array[i];
    }
  }
  return count;
};

// 함수 호출 코드
let numbers3 = [1, -2, 3, -4, 5, 6];
let result7 = sumPositiveNumbers(numbers3);
console.log(result7);

let numbers4 = [-10, 20, -30, 40, 50];
let result8 = sumPositiveNumbersArrow(numbers4);
console.log(result8);
// --------------------------------------------------------------------

// 함수 선언식 정의 코드
function getEvenNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// 화살표 함수 정의 코드
const getEvenNumbersArrow = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
// 함수 호출 코드
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = getEvenNumbers(numbers1);
console.log(result1);

let numbers2 = [15, 22, 33, 44, 55];
let result2 = getEvenNumbersArrow(numbers2);
console.log(result2);
// -----------------------------------------------------
// 함수 선언식 정의 코드
function getHighScoreStudents(arr) {
  let goodBoy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["score"] >= 80) {
      goodBoy.push(arr[i]["name"]);
    }
  }
  return goodBoy;
}
// 화살표 함수 정의 코드
const getHighScoreStudentsArrow = (arr) => {
  let goodBoy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["score"] >= 80) {
      goodBoy.push(arr[i]["name"]);
    }
  }
  return goodBoy;
};
// 함수 호출 코드
let students1 = [
  { name: "김철수", score: 85 },
  { name: "율곡이이", score: 92 },
  { name: "퇴계이황", score: 78 },
  { name: "세종대왕", score: 88 },
];
let result3 = getHighScoreStudents(students1);
console.log(result3);

let students2 = [
  { name: "홍길동", score: 95 },
  { name: "이순신", score: 75 },
  { name: "장영실", score: 82 },
];
let result4 = getHighScoreStudentsArrow(students2);
console.log(result4);

// -------------------------------------------------------------

function getLowStockProducts(arr) {
  let plusStock = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["stock"] < 10) {
      plusStock.push(arr[i]["name"]);
    }
  }
  return plusStock;
}
// 화살표 함수 정의 코드
const getLowStockProductsArrow = (arr) => {
  let plusStock = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["stock"] < 10) {
      plusStock.push(arr[i]["name"]);
    }
  }
  return plusStock;
};
// 함수 호출 코드
let products1 = [
  { name: "노트북", stock: 5 },
  { name: "마우스", stock: 25 },
  { name: "키보드", stock: 8 },
  { name: "모니터", stock: 15 },
];
let result5 = getLowStockProducts(products1);
console.log(result5);

let products2 = [
  { name: "스마트폰", stock: 3 },
  { name: "태블릿", stock: 12 },
  { name: "이어폰", stock: 7 },
];
let result6 = getLowStockProductsArrow(products2);
console.log(result6);
// -----------------------------------------------------
function getTotalPopulation(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]["population"];
  }
  return total;
}
// 화살표 함수 정의 코드
const getTotalPopulationArrow = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]["population"];
  }
  return total;
};
// 함수 호출 코드
let cities1 = [
  { name: "서울", population: 9700000 },
  { name: "부산", population: 3400000 },
  { name: "대구", population: 2400000 },
  { name: "춘천", population: 280000 },
];
let result9 = getTotalPopulation(cities1);
console.log(result9);

let cities2 = [
  { name: "인천", population: 2900000 },
  { name: "광주", population: 1500000 },
  { name: "울산", population: 1100000 },
  { name: "제주", population: 670000 },
];
let result10 = getTotalPopulationArrow(cities2);
console.log(result10);
// --------------------------------------------------

function getLongWords(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// 화살표 함수 정의 코드
const getLongWordsArrow = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
// 함수 호출 코드
let words1 = ["apple", "cat", "elephant", "dog", "computer"];
let result11 = getLongWords(words1);
console.log(result11);

let words2 = ["javascript", "html", "css", "react", "vue"];
let result12 = getLongWordsArrow(words2);
console.log(result12);

//-----------------------------------------------------------

function transformNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      newArr.push(arr[i] * 2);
    } else if (arr[i] % 2 === 1) {
      newArr.push(arr[i] + 3);
    }
  }
  return newArr;
}
// 화살표 함수 정의 코드
const transformNumbersArrow = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      newArr.push(arr[i] * 2);
    } else if (arr[i] % 2 === 1) {
      newArr.push(arr[i] + 3);
    }
  }
  return newArr;
};
// 함수 호출 코드
let numbers6 = [1, 2, 3, 4, 5, 15, 20];
let result17 = transformNumbers(numbers6);
console.log(result17);

let numbers7 = [6, 7, 8, 9, 12, 25];
let result18 = transformNumbersArrow(numbers7);
console.log(result18);
// ---------------------------------------
function classifyStudentsByGrade(arr) {
  let newArr = { A: [], B: [], C: [], D: [] };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["score"] >= 90) {
      newArr["A"].push(arr[i]["name"]);
    } else if (arr[i]["score"] >= 80) {
      newArr["B"].push(arr[i]["name"]);
    } else if (arr[i]["score"] >= 70) {
      newArr["C"].push(arr[i]["name"]);
    } else {
      newArr["D"].push(arr[i]["name"]);
    }
  }
  return newArr;
}
// 화살표 함수 정의 코드
const classifyStudentsByGradeArrow = (arr) => {
  let newArr = { A: [], B: [], C: [], D: [] };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["score"] >= 90) {
      newArr["A"].push(arr[i]["name"]);
    } else if (arr[i]["score"] >= 80) {
      newArr["B"].push(arr[i]["name"]);
    } else if (arr[i]["score"] >= 70) {
      newArr["C"].push(arr[i]["name"]);
    } else {
      newArr["D"].push(arr[i]["name"]);
    }
  }
  return newArr;
};
// 함수 호출 코드
let students3 = [
  { name: "김철수", score: 95 },
  { name: "이영희", score: 87 },
  { name: "박민수", score: 76 },
  { name: "최지영", score: 65 },
  { name: "홍길동", score: 92 },
];
let result13 = classifyStudentsByGrade(students3);
console.log(result13);

let students4 = [
  { name: "김영수", score: 88 },
  { name: "이민정", score: 72 },
  { name: "박준호", score: 94 },
];
let result14 = classifyStudentsByGradeArrow(students4);
console.log(result14);
// ------------------------------------
function countElements(arr) {
  let newArr = {};
  for (let i = 0; i < arr.length; i++) {
    let checkArr = arr[i];
    if (newArr[checkArr]) {
      newArr[checkArr] += 1;
    } else {
      newArr[checkArr] = 1;
    }
  }
  return newArr;
}

// 화살표 함수 정의 코드
const countElementsArrow = (arr) => {
  let newArr = {};
  for (let i = 0; i < arr.length; i++) {
    let checkArr = arr[i];
    if (newArr[checkArr]) {
      newArr[checkArr] += 1;
    } else {
      newArr[checkArr] = 1;
    }
  }
  return newArr;
};
// 함수 호출 코드
let fruits1 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let result15 = countElements(fruits1);
console.log(result15);

let numbers5 = [1, 2, 3, 2, 1, 3, 1, 4];
let result16 = countElementsArrow(numbers5);
console.log(result16);
