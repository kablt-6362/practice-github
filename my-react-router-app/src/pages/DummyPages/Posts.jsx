import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ListPosts from "../../components/ListPosts";
import { useEffect, useState } from "react";

export default function Posts() {
  const [postData, setData] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await axios.get("https://dummyjson.com/posts");
      const data = response["data"]["posts"];
      setData(data);
    }
    getPosts();
  }, []);

  return (
    <div>
      Posts
      <br />
      <Link to="/">홈으로</Link>
      <br />
      <div>
        {postData.map((element) => {
          return (
            <Link key={element.id} to={`/posts/${element.id}`}>
              Post ID:{element.id}
              <br />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
