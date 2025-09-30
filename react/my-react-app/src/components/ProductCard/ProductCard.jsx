import React from "react";

export default function ProductCard({ props }) {
  function inStockCheck(ele) {
    console.log(ele);
  }

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2>상품명:{props.name}</h2>
      <p>가격:{props.price}</p>
      <p>재고 상태:{inStockCheck(props)}</p>
      <p>평점:{props.rating}</p>
      <div>태그들:{props.tags}</div>
    </div>
  );
}
