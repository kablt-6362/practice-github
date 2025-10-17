import React from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ListPosts from "../../components/ListPosts";
import { useEffect, useState } from "react";
import PATHS from "../../constants/paths";

export default function Posts() {
  // useSearchparams를 사용하여 주소에 변수 넣기
  // 페이지 관리 상태 함수
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sortBy") ?? "id";
  const order = searchParams.get("order") ?? "asc"; //오름차순
  const skip = searchParams.get("skip") ?? 0;
  // 다음 버튼 함수의 조건에 사용하기위해
  // 받아온 데이터의 총 개수를 저장할 useState
  const [total, setTotal] = useState(0);

  const [postData, setData] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sort}&order=${order}&limit=5&skip=${skip}`
      );
      const data = response["data"]["posts"];
      setData(data);
      setTotal(response.data.total);
    }
    getPosts();
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center">
      Posts
      <br />
      <div className="flex gap-4 ">
        <button
          className="border-2 text-blue-400 cursor-pointer"
          onClick={() => {
            setSearchParams({});
          }}
        >
          초기화
        </button>
        <button
          className="border-2 text-blue-400 cursor-pointer"
          onClick={() => {
            if (Number(skip) - 5 >= 0) {
              setSearchParams({ skip: Number(skip) - 5, order, sort });
            }
          }}
        >
          이전
        </button>
        <button
          className="border-2 text-blue-400 cursor-pointer"
          onClick={() => {
            if (Number(skip) + 5 <= total) {
              setSearchParams({ skip: Number(skip) + 5, order, sort });
            }
          }}
        >
          다음
        </button>
      </div>
      <div className="flex gap-2">
        <button
          className="border-2 text-blue-400 cursor-pointer"
          onClick={() => {
            setSearchParams({ skip: 0, sortBy: "id", order: "asc" });
          }}
        >
          ID 오름차순
        </button>
        <button
          className="border-2 text-blue-400 cursor-pointer"
          onClick={() => {
            setSearchParams({ skip: 0, sortBy: "id", order: "desc" });
          }}
        >
          ID 내림차순
        </button>
        <button
          className="border-2 text-blue-400 cursor-pointer"
          onClick={() => {
            setSearchParams({ skip: 0, sortBy: "title", order: "asc" });
          }}
        >
          Title 오름차순
        </button>
        <button
          className="border-2 text-blue-400 cursor-pointer"
          onClick={() => {
            setSearchParams({ skip: 0, soryBy: "title", order: "desc" });
          }}
        >
          Title 내림차순
        </button>
      </div>
      <Link to="/">홈으로</Link>
      <br />
      <div className="border-2">
        {postData.map((element) => {
          return (
            <Link key={element.id} to={PATHS.DUMMY.getPostDetail(element.id)}>
              Post ID:{element.id}- title:{element.title}
              <hr />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
