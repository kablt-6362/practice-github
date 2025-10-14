import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from "../../components/ProductsList";
import { useSearchParams } from "react-router-dom";
import PATHS from "../../constants/paths";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchPaeams] = useSearchParams();
  // 이전,다음,초기화 상태 관리를 위한 useState
  const [total, setTotal] = useState(0);
  const sortBy = searchParams.get("sortBy") ?? "id";
  const order = searchParams.get("order") ?? "asc";
  const skip = searchParams.get("skip") ?? 0;

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(
        `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}&limit=5&skip=${skip}`
      );
      const data = res.data.products;
      setProducts(data);
      console.log(res.data.total);
      setTotal(res.data.total);
    }
    getProducts();
  }, [searchParams]);

  return (
    <div className="">
      Products
      <br />
      <Link to="/">홈으로</Link>
      <div className="flex gap-2">
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            setSearchPaeams({});
            // 경로파라미터의 객체 키값에 다 빈값을 넣는다?
          }}
        >
          초기화
        </button>
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            if (Number(skip) - 5 >= 0) {
              setSearchPaeams({ skip: Number(skip) - 5, order, sortBy });
            }
          }}
        >
          이전
        </button>
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            if (Number(skip) + 5 <= total) {
              setSearchPaeams({ skip: Number(skip) + 5, order, sortBy });
              /*
              setSeatchParams((searchParams)=>{
                searchParams.set("skip", NUmber(skip)+5)
                return searchParams;
                });
              */
            }
          }}
        >
          다음
        </button>
      </div>
      <div className="flex gap-3">
        <button
          className="border-2 text-amber-300"
          onClick={() => {
            setSearchPaeams({ skip: 0, sortBy: "id", order: "asc" });
          }}
        >
          Id 오름차순
        </button>
        <button
          className="border-2 text-amber-300"
          onClick={() => {
            setSearchPaeams({ skip: 0, sortBy: "id", order: "desc" });
          }}
        >
          Id 내림차순
        </button>
        <button
          className="border-2 text-amber-500"
          onClick={() => {
            setSearchPaeams({ skip: 0, sortBy: "price", order: "asc" });
          }}
        >
          price 오름차순
        </button>
        <button
          className="border-2 text-amber-500"
          onClick={() => {
            setSearchPaeams({ skip: 0, sortBy: "price", order: "desc" });
          }}
        >
          price 내림차순
        </button>
      </div>
      <div>
        {products.map((element) => {
          return (
            // <Link key={element.id} to={`/dummy/products/${element.id}`}>
            //   Product ID:{element.id} - Product Price{element.price}
            //   <br />
            // </Link>
            <Link
              key={element.id}
              to={PATHS.DUMMY.getProductsDetail(element.id)}
            >
              Product ID:{element.id} - Product Price{element.price} <br />
            </Link>
          );
        })}
      </div>
      <div className="flex gap-2">
        <p>기준</p>
        <p>오름or내림차순</p>
        <p>페이지</p>
      </div>
    </div>
  );
}
