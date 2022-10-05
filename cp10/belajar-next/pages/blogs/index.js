import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            style={{ width: "150px", margin: "10px", cursor: "pointer" }}
          >
            <div className="card">
              <div className="card-body">{post.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
