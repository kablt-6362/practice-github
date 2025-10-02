import React from "react";

export default function Product({ props }) {
  let count = 0;
  // review평점 평균내기
  props.reviews.map((element) => {
    return count + element.rating;
  });
  console.log(count);
  // console.log(props.reviews);
  return (
    <div>
      <p>상품이름:{props.title}</p>
      <div>
        <ul>
          <li>Id:{count}</li>
          <li>평점:{}</li>
          <li>카테고리:{props.category}</li>
        </ul>
        <ul>
          <li>가격</li>
          <li>재고</li>
          <li>브랜드</li>
        </ul>
      </div>
      <p>아래무슨설명</p>
    </div>
  );
}
