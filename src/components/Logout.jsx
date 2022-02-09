import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/users";

function Logout(params) {
  const dispatch = useDispatch();
  function logoutButton() {
    dispatch(logout());
  }

  return (
    <>
      <button onClick={logoutButton}>Logout</button>
    </>
  );
}

export default Logout;
