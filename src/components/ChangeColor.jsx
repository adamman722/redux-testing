import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

function ChangeColor(params) {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  function ChangeColor(e) {
    const { value } = e.target;
    setColor(value);
  }

  function DispatchColor(params) {
    dispatch(changeColor(color));
  }

  return (
    <>
      <input type="text" onChange={ChangeColor} value={color} />
      <button onClick={DispatchColor}>Change Color</button>
    </>
  );
}
export default ChangeColor;
