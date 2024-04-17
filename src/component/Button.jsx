import React from "react";

const Button = (props) => {
  const { data, setDataImg, isDisable } = props;
  let color = data.title.split(" ")[0];

  return (
    <button
      style={{ background: color, boxShadow: `0 0 1rem 0px ${color}` }}
      disabled={isDisable}
      className={`btn btn-primary h-100 w-100 py-2 px-3 border-0 text-wrap fs-6 text-capitalize ${isDisable ? 'shadow-none':''}`}
      onClick={() => setDataImg(data)}
    >
      {data.title}
    </button>
  );
};

export default Button;
