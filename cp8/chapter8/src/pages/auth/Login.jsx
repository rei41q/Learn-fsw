import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({ email: "emailkuadalah@gmail.com" });
  const [cookies, setCookies] = useCookies(["accessToken", "userId", "email"]);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://binar-blog-app.herokuapp.com/login", values)
      .then((res) => {
        const { accessToken, id, email } = res.data;
        setCookies("accessToken", accessToken, { maxAge: 60000 });
        setCookies("userId", id, { maxAge: 60000 });
        setCookies("email", email, { maxAge: 60000 });
        navigate("/dashboard");
      })
      .catch((err) => alert("Login lu salah coy"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input name="email" onChange={handleOnChange} value={values.email} />
        </div>
        <div>
          <label>Password</label>
          <input name="password" onChange={handleOnChange} type="password" />
        </div>
        <div>
          <button type="submit">Login</button>{" "}
        </div>
      </form>
    </div>
  );
};

export default Login;
