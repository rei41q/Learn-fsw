import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({});
  const [cookies, setCookies] = useCookies(["accessToken", "userId"]);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://binar-blog-app.herokuapp.com/login", values)
      .then((res) => {
        const respAccessToken = res.data.accessToken;
        setCookies("accessToken", respAccessToken, { maxAge: 60000 });
        setCookies("userId", 1, { maxAge: 60000 });
        navigate("/dashboard");
      })
      .catch((err) => alert("Login lu salah coy"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input name="email" onChange={handleOnChange} />
        </div>
        <div>
          <label>Password</label>
          <input name="password" onChange={handleOnChange} />
        </div>
        <div>
          <button type="submit">Login</button>{" "}
        </div>
      </form>
    </div>
  );
};

export default Login;
