import React from "react";

export default function Movie({ props }) {
  console.log(props);
  //props 는 받아온 정보의 객체배열중 하나
  return (
    <div>
      <ul>
        <li>영화 제목 : {props.title}</li>
        <li>영화 줄거리 : {props.overview}</li>
        <li>영화 개봉일 : {props.release_date}</li>
        <li>영화 평균 평점 : {props.vote_average}</li>
      </ul>
    </div>
  );
}
