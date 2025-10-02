import React from "react";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductContainer() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    async function productInfo() {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res["data"]["products"];
      setProduct(data);
      // console.log(data[0]["reviews"]);
    }
    productInfo();
  }, []);
  return (
    <div>
      <div>
        {/* sort 함수 넣을 버튼들 */}
        <button>Id Up</button>
        <button>Id Down</button>
        <button>Price Up</button>
        <button>Price Down</button>
        <button>score Up</button>
        <button>score Down</button>
      </div>
      {/* map을 통해 Product컴포넌트 생성할곳 */}
      {products.map((element) => {
        return <Product key={element.id} props={element}></Product>;
      })}
    </div>
  );
}
