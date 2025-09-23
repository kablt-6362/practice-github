import axios from "axios";
//도메인주소
const BASE_URL = `https://dummyjson.com`;
const terminalWidth = process.stdout.columns;
const border = "=".repeat(terminalWidth);

// 상품안의 키값들
/*[
  'id',
  'products',
  'total',
  'discountedTotal',
  'userId',
  'totalProducts',
  'totalQuantity'
]*/

// TODO: 모든 장바구니 목록 조회(Get all carts)
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 모든 장바구니 조회(Get all carts) 요청
// 2. 응답 데이터 객체 출력
async function getAllCart() {
  const res = await axios.get(`${BASE_URL}/carts`);
  const data = res["data"];
  // console.log(Object.entries(data)); cart의 key값이 뭐가 있는지 확인하는 로그
  console.log(data);
}
// getAllCart();

/* 출력 결과
{
  "carts": [
    {
      "id": 1,
      "products": [
        {
          "id": 144,
          "title": "Cricket Helmet",
          "price": 44.99,
          "quantity": 4,
          "total": 179.96,
          "discountPercentage": 11.47,
          "discountedTotal": 159.32,
          "thumbnail": "<https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png>"
        },
        {...}
        // more products
      ],
      "total": 4794.8,
      "discountedTotal": 4288.95,
      "userId": 142,
      "totalProducts": 5,
      "totalQuantity": 20
    },
    {...},
    {...},
    {...}
    // 30 items
  ],
  "total": 50,
  "skip": 0,
  "limit": 30
}
*/
console.log(border);

// TODO: 단일 장바구니 조회(Get a single cart)
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 10번 장바구니 조회(Get a single cart) 요청
// 2. 응답 데이터 객체 출력
async function getSinglecart(num) {
  const res = await axios.get(`${BASE_URL}/carts/${num}`);
  const data = res["data"];
  console.log(data);
  //console.log(Object.keys(data)); 해당 아이디에 있는 key가 무엇이있는지 확인
}
// getSinglecart(10);
/* 출력 결과
{
  id: 10,
  products: [
    {
      id: 190,
      title: 'IWC Ingenieur Automatic Steel',
      price: 4999.99,
      quantity: 5,
      total: 24999.949999999997,
      discountPercentage: 12.34,
      discountedTotal: 21914.96,
      thumbnail: '<https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/thumbnail.png>'
    },
    {
      id: 94,
      title: 'Longines Master Collection',
      price: 1499.99,
      quantity: 3,
      total: 4499.97,
      discountPercentage: 16.44,
      discountedTotal: 3760.17,
      thumbnail: '<https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png>'
    }
  ],
  total: 29499.92,
  discountedTotal: 25675.13,
  userId: 160,
  totalProducts: 2,
  totalQuantity: 8
}
*/
console.log(border);

// TODO: 단일 장바구니에 포함된 상품의 수(total products) 조회
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 10번 장바구니 조회(Get a single cart) 요ducts) 데이터 출력
async function totalProduct(num) {
  const res = await axios.get(`${BASE_URL}/carts/${num}`);
  const data = res["data"];
  //여기까지가 10번 장바구니청
  // 2. 응답 데이터 객체에서 상품의 수(total pro
  const respone = data["totalProducts"];
  console.log(respone);
}
// totalProduct(10);

/* 출력 결과
2
*/
console.log(border);

// TODO: 단일 장바구니에 포함된 상품의 목록(products) 조회
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 10번 장바구니 조회(Get a single cart) 요청
// 2. 응답 데이터 객체에서 상품의 목록(products) 배열 데이터 출력
async function getCartProduct(num) {
  const res = await axios.get(`${BASE_URL}/carts/${num}`);
  const data = res["data"];
  const response = data["products"];
  console.log(response);
}
// getCartProduct(10);
/* 출력 결과
[
  {
    id: 190,
    title: 'IWC Ingenieur Automatic Steel',
    price: 4999.99,
    quantity: 5,
    total: 24999.949999999997,
    discountPercentage: 12.34,
    discountedTotal: 21914.96,
    thumbnail: '<https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/thumbnail.png>'
  },
  {
    id: 94,
    title: 'Longines Master Collection',
    price: 1499.99,
    quantity: 3,
    total: 4499.97,
    discountPercentage: 16.44,
    discountedTotal: 3760.17,
    thumbnail: '<https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png>'
  }
]
*/
console.log(border);

// TODO: 단일 장바구니에 포함된 상품의 이름 추출 및 출력
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 10번 장바구니 조회(Get a single cart) 요청
// 2. 응답 데이터 객체에서 상품의 목록(products) 배열 데이터 추출
// 3. map() 메서드를 활용해서 배열 데이터에서 상품의 이름만 모아서 새로운 배열 생성
// 4. 상품의 이름만 모은 배열 출력
async function newArrCart(id) {
  const res = await axios.get(`${BASE_URL}/carts/${id}`);
  const data = res["data"]; // cart중 10번 장바구니를 data 할당
  const respone = data["products"]; // 10번 카트에서 객체중 상품 목록이 products인것을 할당
  // respone안에 내용을 가지고 새로운 배열을 만든다.(title를 기준으로)
  const newArr = respone.map((product) => {
    return product.title;
  });
  console.log(newArr);
}
newArrCart(10);
/* 출력 결과
[
  'IWC Ingenieur Automatic Steel',
  'Longines Master Collection'
]
*/
console.log(border);
