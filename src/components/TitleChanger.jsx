import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { titleChanger } from "../reducers/titleChanger";

const TitleChanger = () => {
  const dispatch = useDispatch();

  const { title } = useSelector((state) => state.changer);

  const titleChange = (event) => {
    dispatch(titleChanger(event.target.value));
  };

  return (
    <div>
      {title}
      <input type="text" onChange={titleChange} />
    </div>
  );
};

export default TitleChanger;
