import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleBlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>{post.title}</div>
      <div>{post.body}</div>
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          go back
        </button>
      </div>
    </div>
  );
};

export default SingleBlogPost;
