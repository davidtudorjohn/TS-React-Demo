import React from "react";
import "./item.css";
interface Props {
  title: string;
  userId: number;
}
const Item = (props: Props) => {
  return (
    <div className="item-container">
      <h6>{props.title}</h6>
      <p>{props.userId}</p>
    </div>
  );
};

export default Item;
