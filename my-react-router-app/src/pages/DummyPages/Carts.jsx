import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CartsList from "../../components/CartsList";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import PATHS from "../../constants/paths";

export default function Carts() {
  const [carts, setcarts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const order = searchParams.get("order") ?? "asc";
  const sortBy = searchParams.get("sortBy") ?? "id";
  const skip = searchParams.get("skip") ?? 0;

  // dummyjson에서 Carts 카테고리에 sortBy,order에 대한 내용이 없다
  // 그래서 안되는거 같다
  // to={}이 안되는 이유는 무엇인가

  useEffect(() => {
    async function getCarts() {
      const res = await axios.get(
        `https://dummyjson.com/carts?limit=10&skip=${skip}&sortBy=${sortBy}&order=${order}`
      );
      const data = res.data.carts;
      setcarts(data);
      console.log(data);
    }
    getCarts();
  }, [searchParams]);

  return (
    <div>
      Carts
      <br />
      <Link to="/">홈으로</Link>
      <div>
        <button>초기화</button>
        <button>이전</button>
        <button>다음</button>
      </div>
      <div className="flex gap-2">
        <button
          className="border-2 text-red-300 cursor-pointer"
          onClick={() => {
            console.log("오름확인");
            setSearchParams({ skip: 0, order: "asc", sortBy: "id" });
          }}
        >
          id 오름차순
        </button>
        <button
          className="border-2 text-red-300 cursor-pointer"
          onClick={() => {
            console.log("desc-check");
            setSearchParams({ skip: 0, order: "desc", sortBy: "id" });
          }}
        >
          id 내림차순
        </button>
        <button
          className="border-2 text-red-300 cursor-pointer"
          onClick={() => {
            setSearchParams({ skip: 0, sortBy: "total", order: "asc" });
          }}
        >
          total 오름차순
        </button>
        <button
          className="border-2 text-red-300 cursor-pointer"
          onClick={() => {
            setSearchParams({ skip: 0, sortBy: "total", order: "desc" });
          }}
        >
          total 내림차순
        </button>
      </div>
      <div>
        {carts.map((element) => {
          return (
            <Link key={element.id} to={PATHS.DUMMY.getCartDetail(element.id)}>
              Cart ID:{element.id}- Cart-total:{element.total}
              <br />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
