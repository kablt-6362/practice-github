import React from "react";

export default function Product({ element }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2>{element.title}</h2>
      <p>{element.price}</p>
      <p>{element.quantity}</p>
      <p>{element.total}</p>
      <img src={`${element.thumbnail}`} alt="상품 이미지(thumbnail)" />
    </div>
  );
}
