import React from "react";

const View = (props) => {
  const { content } = props;
  return (
    <div className="p-3">
      <img src={content.urlImg} alt={content.title} className="img-fluid" />
    </div>
  );
};

export default View;
