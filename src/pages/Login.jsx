import "./../styles/base/base.css";
import "./../styles/base/utilities.css";
import "./../styles/index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);
  return (
    <section className="flex justify-center align-center login">
      <div className="flex column justify-center align-center">
        <h2>Welcome back!</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setLoginForm((prev) => {
              return {
                ...prev,
                name: e.target.value,
              };
            });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setLoginForm((prev) => {
              return {
                ...prev,
                password: e.target.value,
              };
            });
          }}
        />
        {error && <p className="error-message">{error}</p>}
        <button
          className="login-btn"
          onClick={async () => {
            if (!loginForm.name || !loginForm.password) {
              setError("Please fill out both fields.");
              return;
            }
            const body = new FormData();
            body.append("name", loginForm.name);
            body.append("password", loginForm.password);
            try {
              const response = await axios(
                "http://localhost/expense-tracker-3/server-side/verifyUser.php",
                {
                  method: "post",
                  headers: { "Content-Type": "multipart/form-data" },
                  data: body,
                }
              );
              if (response.data.message === "Login successful") {
                localStorage.setItem("userId", response.data.id);
                navigate("/home");
              } else {
                console.log("Username or password is incorrect");
                setError("Username or password is incorrect");
              }
            } catch (error) {
              console.log(error);
              setError(error);
            }
          }}
        >
          Login
        </button>
        <h4>
          Not a member?{" "}
          <a
            className="link"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </a>
        </h4>
      </div>
    </section>
  );
};

export default Login;
