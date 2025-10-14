import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetail() {
  const [posts, setPost] = useState();
  const { postId } = useParams();

  useEffect(() => {
    async function getPost() {
      const res = await axios(`https://dummyjson/posts/${postId}`);
      setPost(res.data);
    }
    getPost();
  }, [postId]);

  return (
    <div>
      <div>postId:{posts.id}</div>
    </div>
  );
}
