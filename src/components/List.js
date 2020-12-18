import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Actions";
const css1 = {
  color: "wheat",
};
const btn = {
  background: "black",
  color: "white",
  borderRadius: "9px 0px",
  marginRight: "10px",
};
function List() {
  const data = useSelector((state) => state.add);
  const dispatch = useDispatch();
  return (
    <div style={css1}>
      {data.map((Element) => {
        return (
          <p key={Element.id}>
            <button style={btn} onClick={() => dispatch(remove(Element.id))}>
              Check
            </button>
            {Element.value}
          </p>
        );
      })}
      {console.log(data)}
    </div>
  );
}

export default List;
