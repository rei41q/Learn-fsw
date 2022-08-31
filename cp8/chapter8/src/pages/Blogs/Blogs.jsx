import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const listPosts = res.data;
        console.log(listPosts);
        setPosts(listPosts);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <Button title={"Register"} />
      </div>
      <div style={styles.wrapper}>
        {posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
};

export default Blogs;
