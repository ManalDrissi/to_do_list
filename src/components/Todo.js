import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Actions";
const css = {
  background: "black",
  color: "white",
  borderRadius: "9px 0px",
};
const css1 = {
  backgroundColor: "gray",
  color: "white",
  borderRadius: "9px 0px",
};

const Todo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const styling = () => {
    if (!value) {
      return css1;
    }
    return css;
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        style={styling()}
        onClick={() => {
          dispatch(add(value));
          setValue("");
        }}
        disabled={!value}
      >
        add
      </button>
    </div>
  );
};
export default Todo;
