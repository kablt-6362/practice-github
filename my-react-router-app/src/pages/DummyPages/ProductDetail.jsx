import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  //상품 값을 저장할 useState
  const [products, setProducts] = useState({});
  //경로 파라미터 값 불러오기
  const { productId } = useParams();

  useEffect(() => {
    async function getProduct() {
      const res = await axios(`https://dummyjson.com/products/${productId}`);

      setProducts(res.data);
    }
    getProduct();

    console.log(productId);
  }, [productId]);
  console.log(products.title);

  return (
    <div>
      <div>상품정보</div>
      <div>Id:{products.id}</div>
      <div>title:{products.title}</div>
      <div>price:{products.price}</div>
    </div>
  );
}
