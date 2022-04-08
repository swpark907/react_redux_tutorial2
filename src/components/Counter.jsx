import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount } from "../reducers/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.counter);

  const increase = () => {
    dispatch(increaseCount(1));
  };
  return (
    <div>
      {count}
      <button onClick={increase}>증가</button>
    </div>
  );
};

export default Counter;
