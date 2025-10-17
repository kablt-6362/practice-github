import React from "react";
import { useEffect, useState } from "react";
// 경로 파라미터 불러오기
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CartDetail() {
  //Cart 값 저장할 useState
  const [carts, setCarts] = useState({});
  // 경로 파라미터 값 불러오기
  const { cartsId } = useParams();

  useEffect(() => {
    async function getCarts() {
      const response = await axios(`https://dummyjson.carts/${cartsId}`);
      console.log(response.data);
      setCarts(response.data.carts);
    }
    getCarts();
  }, [cartsId]);

  return (
    <div>
      <div>상품Id:{carts.id}</div>
      <div>Total:{carts.total}</div>
      <div>기타등등</div>
    </div>
  );
}
