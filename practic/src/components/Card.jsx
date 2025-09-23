import React from "react";

const Card = (props) => {
  return <div className="m-3 rounded-2xl p-4 bg-gray-900 h-96 w-2xs text-white">{props.name} {props.desc}</div>;
};

export default Card;
