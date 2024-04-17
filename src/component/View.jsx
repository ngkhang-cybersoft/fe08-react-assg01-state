import React from "react";

const View = (props) => {
  const { content } = props;
  return (
    <div className="p-3 shadow rounded">
      <img src={content.urlImg} alt={content.title} className="img-fluid rounded-3" />
    </div>
  );
};

export default View;
