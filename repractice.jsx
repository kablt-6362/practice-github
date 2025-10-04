import { useState } from "react";
import axios from "axios";
import Movie from "./Movie";

// BASE_URL 과 API_KEY 를 선언하고, 적절한 값을 할당한다
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];
const BASE_URL = `https://api.themoviedb.org/3`;

export default function MovieSearch() {
  // 검색 결과와 검색어를 관리할 적절한 상태를 생성한다

  // 내가 검색한 것에대한 정보를 관리하는 상태.
  // input에 검색할 영화 이름을 입력하면, 압력하는 이벤트를 input의 onchange가 받아 이벤트의
  // 대상의 value를 search에 할당(setSrarch)하므로서 내가 입력한 영화 이름을 상태 변수에 저장한것
  const [search, setSearch] = useState("");
  // 검색 결과의 값을 받아 필요한 정보를 요청하고 받아와 저장해두기 위한 상태
  const [movies, setMovies] = useState([]);
  // onSubmit 이벤트와 onChange 이벤트의 핸들러 함수를 정의한다

  //영화 이름 입력란에 작성한 정보를 담는다
  function handleChange(event) {
    setSearch(event["target"]["value"]);
  }

  //search에 담겨있는 영화이름을 사용하여 영화를 불러온다
  async function fetchData(event) {
    event.preventDefault();

    //config << API사용에 필요한 정보를 담아두는거?
    const config = {
      method: "GET",
      url: `${BASE_URL}/search/movie`,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "ko-KR",
        query: search,
      },
    };
    const res = await axios(config);
    console.log(res.data.results);
    setMovies(res["data"]["results"]);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          fetchData(event);
          // form 태그의 onSubmit 속성에서 실행할 함수를 정의하고, 호출한다
        }}
      >
        <input
          type="text"
          placeholder="영화 이름"
          onChange={(event) => {
            handleChange(event);
            // input 태그의 onChange 속성에서 실행할 함수를 정의하고, 호출한다
          }}
        />
        <input type="submit" value="검색" />
      </form>
      <ul>
        {/* Movie 컴포넌트를 활용하여 검색된 영화 데이터를 반복 생성하여 표시 */}
        {/* {movies} */}
        {movies.map((event) => {
          return <Movie key={event.id} props={event} />;
        })}
      </ul>
    </div>
  );
}
