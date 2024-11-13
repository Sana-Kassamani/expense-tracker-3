import "./../styles/base/base.css";
import "./../styles/base/utilities.css";
import "./../styles/index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  useEffect(() => {
    console.log(signupForm);
  }, [signupForm]);
  return (
    <section className="flex justify-center align-center signup">
      <div className="flex column justify-center align-center">
        <h2>Welcome</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setSignupForm((prev) => {
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
            setSignupForm((prev) => {
              return {
                ...prev,
                password: e.target.value,
              };
            });
          }}
        />

        <button
          className="login-btn"
          onClick={async () => {
            if (!signupForm.name || !signupForm.password) {
              setError("Please fill out both fields.");
              return;
            }
            const body = new FormData();
            body.append("name", signupForm.name);
            body.append("password", signupForm.password);

            try {
              const response = await axios(
                "http://localhost/Expense-Tracker-Serverside/server-side/createUser.php",
                {
                  method: "post",
                  headers: { "Content-Type": "multipart/form-data" },
                  data: body,
                }
              );
              if (response.data.message === "Successful creating new user") {
                localStorage.setItem("userId", response.data.id);
                navigate("/home");
              } else {
                console.log("error signing up");
                setError("error signing up");
              }
            } catch (error) {
              console.log(error);
              setError(error);
            }
          }}
        >
          Signup
        </button>
        <h4>
          <a
            className="link"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Login
          </a>
        </h4>
      </div>
    </section>
  );
};

export default Signup;
