import React from "react";
import Post from "./Post";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Container() {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const LIMIT = 5;

  let Url = `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`;
  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get(`${Url}`);
      const data = res["data"]["posts"];
      setPosts(data);
    }
    fetchPosts();
  }, [skip]);
  // skip 이 바뀔때마다 위의 함수가 발동.주소에 변수를 넣는다?

  // 함수마다 setSkip을 이용해 범위 조정.
  //
  // 처음으로 함수
  function goFirst() {
    setSkip(0);
  }
  // 이전으로
  function goPre() {
    let count;
    if (skip > 4) {
      count = skip - 5;
    } else {
      count = skip;
      alert("첫 페이지 입니다");
    }
    setSkip(count);
  }

  //다음으로
  function goNext() {
    let count;
    // -- 강사님 코드 --
    //LIMIT 상수 이용해서 간단히 표현 가능
    // setSkip(skip + LIMIT), 이전(함수)도 동일하게 가능
    // if(skip-LIMIT>0)이면 setSkip실행, 아니면 경고 or 다른대처
    if (skip < 250) {
      count = skip + 5;
    } else {
      count = skip;
      alert("마지막페이지 입니다");
    }
    setSkip(count);
  }

  //마지막으로
  function goLast() {
    setSkip(250);
    //250 대신 상수로 처리가능
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => {
            goFirst();
          }}
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
        >
          처음으로
        </button>
        <button
          onClick={() => {
            goPre();
          }}
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
        >
          이전
        </button>
        <button
          onClick={() => {
            goNext();
          }}
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
        >
          다음
        </button>
        <button
          onClick={() => {
            goLast();
          }}
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
        >
          마지막으로
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
