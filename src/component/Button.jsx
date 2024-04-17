import React from "react";

const Button = (props) => {
  const { data, setDataImg, isDisable } = props;
  let color = data.title.split(" ")[0];

  return (
    <button
      style={{ background: color }}
      disabled={isDisable}
      className="d-inline-block btn btn-primary border-0 mx-2 px-4 py-2 text-uppercase"
      onClick={() => setDataImg(data)}
    >
      {data.title}
    </button>
  );
};

export default Button;
