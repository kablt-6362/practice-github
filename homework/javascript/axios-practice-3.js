import axios from "axios";
const url = "https://dummyjson.com";
// TODO: 식사(meal) 종류가 lunch 인 레시피(recipe) 조회 요청
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 식사(meal) 종류가 lunch 인 레시피(recipe) 조회 요청
// 2. 응답 데이터 객체에서 recipes 배열을 찾아서 출력
// console.log(data["recipes"][1]["mealType"]); //key값[recipes,total,skip,limit]
async function lunchRecipe() {
  const res = await axios.get(`${url}/recipes`);
  const data = res["data"]; //recipes들 keys recipes,total,skip,limit, data안에는 4개가 다들어있다.
  const response = data["recipes"]; // data중 recipes값만 본다
  response.filter((ele) => {
    // console.log(ele["mealType"]);
    if (ele["mealType"].includes("Lunch")) {
      console.log(ele);
    }
  });
}
// lunchRecipe();
/* 출력 결과
recipes: [
  {
    id: 2,
    name: 'Vegetarian Stir-Fry',
    ingredients: [Array],
    instructions: [Array],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 3,
    difficulty: 'Medium',
    cuisine: 'Asian',
    caloriesPerServing: 250,
    tags: [Array],
    userId: 143,
    image: '<https://cdn.dummyjson.com/recipe-images/2.webp>',
    rating: 4.7,
    reviewCount: 26,
    mealType: [Array]
  },
  // ...
],
*/

// TODO: POST 요청으로 새로운 레시피(recipe) 추가
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. POST 요청으로 새로운 레시피(recipe) 추가
// 2. 응답 데이터 객체에서 추가된 레시피(recipe) 정보를 찾아서 출력
// 3. 추가할 레시피(recipe) 정보
// name: 'Kimbap'
// cuisine: 'Korean
const METHOD = "post";
async function postRe() {
  const config = {
    url: "https://dummyjson.com/recipes/add",
    method: METHOD,
    data: {
      id: 5,
      name: "Kimbap",
      cuisine: "Korean",
      header: { "Content-Type": "application/json" },
    },
  };
  const response = await axios(config);
  const data = response["data"];
  console.log(data);
}
// postRe();
/* 출력 결과
{ id: 51, name: 'Kimbap', cuisine: 'Korean' }
*/

// TODO: 이름으로 상용자 검색(search)하고, 출력
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 이름으로 상용자 검색(search)하고, 사용자(users) 정보를 찾아서 출력
// 2. 검색어 : 'anna'
async function findUser() {
  const res = await axios.get(`${url}/users/search?q=anna`);
  const data = res["data"];
  console.log(data);
}
// findUser();
/* 출력 결과
[
  {
    id: 46,
    firstName: 'Hannah',
    lastName: 'Robinson',
    maidenName: '',
    age: 29,
    gender: 'female',
    email: 'hannah.robinson@x.dummyjson.com',
    phone: '+92 556-625-4398',
    username: 'hannahr',
    password: 'hannahrpass',
    birthDate: '1995-2-2',
    image: '<https://dummyjson.com/icon/hannahr/128>',
    bloodGroup: 'AB+',
    height: 150.25,
    weight: 67.93,
    eyeColor: 'Brown',
    hair: [Object],
    ip: '82.201.57.248',
    address: [Object],
    macAddress: 'd5:da:6d:bc:6d:1b',
    university: 'Harvard University',
    bank: [Object],
    company: [Object],
    ein: '449-504',
    ssn: '150-215-129',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15',
    crypto: [Object],
    role: 'user'
  },
  //...
]
*/

// TODO: 10번 사용자의 할 일 (todo) 목록 조회
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 9번 사용자의 할 일 (todo) 목록 조회
// 2. 응답 데이터 객체에서 todos 배열을 찾아서 출력
async function todoUser() {
  const res = await axios.get(`${url}/todos/user/9`);
  const data = res["data"];
  console.log(data);
}
todoUser();
/* 출력 결과
[
  {
    id: 10,
    todo: 'Write a thank you letter to an influential person in your life',
    completed: true,
    userId: 9
  },
  {
    id: 88,
    todo: 'Donate blood at a local blood center',
    completed: true,
    userId: 9
  }
],
*/

// TODO: 전체 댓글 목록 조회 후 내용(body), 좋아요(likes), 사용자명(username) 출력

/* 출력 결과
[
  {
    body: 'This is some awesome thinking!',
    likes: 3,
    username: 'emmac'
  },
  {
    body: "What terrific math skills you're showing!",
    likes: 4,
    username: 'cameronp'
  },
  // ...
]
*/
