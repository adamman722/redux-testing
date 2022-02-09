import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/users";

function Login(params) {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Adam", age: 27, email: "atarpey@gmail.com" })
          );
        }}
      >
        Login
      </button>
    </div>
  );
}
export default Login;
