import React from "react";
import { useParams } from "react-router-dom";

const SingleBlogPost = () => {
  const { postId } = useParams();
  return <div>SingleBlogPost {postId}</div>;
};

export default SingleBlogPost;
