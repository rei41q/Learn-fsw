import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const CreateBlog = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const [cookies] = useCookies(["accessToken"]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts?page=3", values, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .then((res) => navigate("/blogs"))
      .catch((err) => {
        alert("something wrong, pelase relogin");
        navigate("/login");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title : </label>
          <input name="title" onChange={handleChange} />
        </div>
        <div>
          <label>Body : </label>
          <input name="body" id="bodyId" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
