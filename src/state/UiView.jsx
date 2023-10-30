import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_CLOSE } from "./uiSlice";
const UiView = () => {
  const ui = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>List of Users</h2>
      <button onClick={() => dispatch(LOGIN_CLOSE())}>123</button>

      <div>{ui && <pre>{JSON.stringify(ui, null, 2)}</pre>}</div>
    </div>
  );
};

export default UiView;
